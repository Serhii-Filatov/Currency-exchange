import { Observable } from '../store/observable';
import { CoinService } from '../services/coinService';
import { store } from '../store/currencyExchangeStore';

export class Options {
  coinService;

  currencies;

  constructor() {
    this.coinService = new CoinService();
    this.currencies = store.currencies;
    this.optionObservable = new Observable();
  }

  setupEventListeners() {
    const optionsSelect = document.getElementById('currencies-js');
    optionsSelect.addEventListener('change', () => {
      const selectedOption = optionsSelect.value;
      this.optionObservable.notify(selectedOption);
    });

    this.optionObservable.addObserver(async (option) => {
      await this.updateCoins(option);
    });
  }

  async updateCoins(option) {
    await this.coinService.getCoins(option);
  }

  render() {
    $('.switches')
      .append(
        $(
          '<div><select id="currencies-js" class="w-[203px] h-[51px] pl-6 rounded-lg shadow-lg shadow-slate-500/60"></select></div>',
        ),
      )
      .append(
        $(
          '<div><select id="crypto-js" class="w-[203px] h-[51px] pl-6 rounded-lg mb-[5px] shadow-lg shadow-slate-500/60"></select></div>',
        ),
      );
    this.setupEventListeners();
    this.renderOptions();
  }

  async renderOptions() {
    await this.currencies.forEach((element) => {
      $('#currencies-js').append($(`<option value="${element}">${element}</option>`));
    });

    const dataArray = await this.coinService.getCoins();
    dataArray.coins.forEach((element) => {
      $('#crypto-js').append($(`<option value="${element.price}">${element.symbol}</option>`));
    });
    $('#crypto-js').on('change', (event) => {
      const selectedValue = event.target.value;
      $('#crypto-input-js').val(selectedValue);
    });
  }
}
