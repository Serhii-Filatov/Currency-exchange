export class ExchangeBtn {
  render() {
    $('.app').append($('<div class="btn flex justify-end"></div>'));
    $('.btn')
      .append(
        '<button type="button" class="w-[203px] h-[47px] bg-slate-900 shadow-lg shadow-slate-500/60 hover:bg-slate-800 text-white text-base rounded-lg">Exchange</button>',
      )
      .on('click', () => {
        console.log('Нажата кнопка');
      });
  }
}
