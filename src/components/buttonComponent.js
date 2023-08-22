export class ExchangeButton {
  render() {
    $('.exchangeButton')
      .append(
        '<button type="button" class="w-[203px] h-[47px] bg-slate-900 shadow-lg shadow-slate-500/60 hover:bg-slate-800 text-white text-base rounded-lg">Exchange</button>',
      )
      .on('click', () => {
        const input1 = document.getElementById('currencies-input-js');

        const enteredValue1 = input1.value;

        console.log('Введенное в input1:', enteredValue1);
      });
  }
}
