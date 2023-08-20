import { CoinService } from '../services/coinService';
import { store } from '../store/currencyExchangeStore';

export class Options {
  coinService;

  currencies;

  constructor() {
    this.coinService = new CoinService();
    this.currencies = store.currencies;
  }

  render() {
    $('.switches')
      .append(
        $(
          '<div><select id="currencies-js" class="w-[203px] h-[51px] pl-6 rounded-lg shadow-lg shadow-slate-500/60"></select></div>',
        ).on('change', () => {
          const selectElement = document.getElementById('currencies-js');
          const inputElement = document.getElementById('currencies-input-js');
          const selectedOption = selectElement.options[selectElement.selectedIndex];
          const selectedValue = selectedOption.value;
          inputElement.value = selectedValue;
        }),
      )
      .append(
        $(
          '<div><select id="crypto-js" class="w-[203px] h-[51px] pl-6 rounded-lg mb-[5px] shadow-lg shadow-slate-500/60"></select></div>',
        ).on('change', () => {
          const selectElement = document.getElementById('crypto-js');
          const inputElement = document.getElementById('crypto-input-js');
          const selectedOption = selectElement.options[selectElement.selectedIndex];
          const selectedValue = selectedOption.value;
          inputElement.value = selectedValue;
        }),
      );
    $('#crypto-js').append(this.renderOptions());
  }

  async renderOptions() {
    await this.currencies.forEach((element) => {
      $('#currencies-js').append($(`<option value="${element}">${element}</option>`));
    });
    const dataArray = await this.coinService.getCoins();
    // console.log(dataArray);
    let murkup;
    dataArray.coins.forEach((element) => {
      console.log('render');
      $('#crypto-js').append($(`<option value="${element.price}">${element.symbol}</option>`));
    });
    return murkup;
  }
}
