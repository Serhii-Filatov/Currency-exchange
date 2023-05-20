export class Options {
  render() {
    $('.app')
      .append($('<div class="switches grid gap-4 grid-cols-2 mb-[22px]"></div>'));
    $('.switches')
      .append(
        $(
          '<div><select id="select-js" class="w-[203px] h-[51px] pl-6 rounded-lg shadow-lg shadow-slate-500/60"><option value="option1">option1</option><option value="option2">option2</option></select></div>',
        ),
      )
      .append(
        $(
          '<div><select class="w-[203px] h-[51px] pl-6 rounded-lg mb-[5px] shadow-lg shadow-slate-500/60"><option value="option1">option1</option><option value="option2">option2</option></select></div>',
        ),
      );
  }
}
