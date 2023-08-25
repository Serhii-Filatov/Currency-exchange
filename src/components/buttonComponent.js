export class ExchangeButton {
  render() {
    $('.exchangeButton')
      .append(
        '<button type="button" class="w-[203px] h-[47px] bg-slate-900 shadow-lg shadow-slate-500/60 hover:bg-slate-800 text-white text-base rounded-lg">Exchange</button>',
      )
      .on('click', () => {
        const userInput = document.getElementById('currencies-input-js');
        const dataInput = document.getElementById('crypto-input-js');
        const enteredValue = userInput.value;
        const priceValue = dataInput.value;
        const result = parseFloat(enteredValue).toFixed(2) * parseFloat(priceValue).toFixed(2);
        $('#crypto-input-js').val(result);
      });
  }
}
