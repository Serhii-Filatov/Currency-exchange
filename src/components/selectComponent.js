import { currenciesMarkup, cryptoMarkup } from '../store/currencyExchangeStore';

export class Options {
  render() {
    $('.app').append($('<div class="switches grid gap-4 grid-cols-2 mb-[22px]"></div>'));
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
    $('#currencies-js').append(currenciesMarkup());
    $('#crypto-js').append(cryptoMarkup());
  }
}
