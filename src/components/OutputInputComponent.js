export class OutputInput {
  render() {
    $('.switches')
      .append(
        $(
          '<div><input id="currencies-input-js" type="number" placeholder="0.00" class="w-[203px] h-[51px] p-6 rounded-lg text-lg shadow-lg shadow-slate-500/60"></div>',
        ).on('input', (event) => {
          const enteredValue = event.target.value;
          console.log('Введенное значение input1:', enteredValue);
        }),
      )
      .append(
        $(
          '<div><input id="crypto-input-js" type="number" placeholder="0.00" class="w-[203px] h-[51px] p-6 rounded-lg text-lg shadow-lg shadow-slate-500/60"></div>',
        ).on('input', (event) => {
          const enteredValue = event.target.value;
          console.log('Введенное значение input2:', enteredValue);
        }),
      );
  }
}
