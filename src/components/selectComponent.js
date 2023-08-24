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

    optionsSelect.addEventListener('change', async () => {
      const selectedOption = optionsSelect.value;
      this.optionObservable.notify(selectedOption);
      this.renderOptions();
    });

    this.optionObservable.addObserver(async (option) => {
      await this.updateCoins(option);
    });
  }

  dataArray;

  async updateCoins(option) {
    this.dataArray = await this.coinService.getCoins(option);
    this.renderOptions();
  }

  async render() {
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
    this.currencies.forEach((element) => {
      $('#currencies-js').append($(`<option value="${element}">${element}</option>`));
    });
    this.setupEventListeners();
    this.renderOptions();
    const data = await this.coinService.getCoins();
    data.coins.forEach((element) => {
      $('#crypto-js').append(
        $(`<option value="${element.price.toFixed(2)}">${element.symbol}</option>`),
      );
    });
    $('#crypto-input-js').val(data.coins[0].price.toFixed(2));
  }

  renderOptions() {
    $('#crypto-js').empty();
    if (this.dataArray) {
      this.dataArray.coins.forEach((element) => {
        $('#crypto-js').append(
          $(`<option value="${element.price.toFixed(2)}">${element.symbol}</option>`),
        );
      });
    }
    $('#crypto-js').on('change', (event) => {
      const selectedValue = event.target.value;
      $('#crypto-input-js').val(selectedValue);
    });
  }
}
