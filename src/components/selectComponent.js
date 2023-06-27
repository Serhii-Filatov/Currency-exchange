import { setMarkup } from '../store/currencyExchangeStore';

export class Options {
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
    $('#currencies-js').append(setMarkup());
    $('#crypto-js').append(setMarkup());
  }
}
