export class InputOutput {
  render() {
    $('.switches')
      .append(
        $(
          '<div><input type="number" placeholder="0.00" class="w-[203px] h-[51px] p-6 rounded-lg text-lg shadow-lg shadow-slate-500/60"></div>',
        ),
      )
      .append(
        $(
          '<div><input type="number" placeholder="0.00" class="w-[203px] h-[51px] p-6 rounded-lg text-lg shadow-lg shadow-slate-500/60"></div>',
        ),
      );
  }
}
