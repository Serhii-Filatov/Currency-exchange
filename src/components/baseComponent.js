export class Base {
  render() {
    $('body').append(
      $(
        '<div class="app bg-orange-200 w-[491px] h-[306px] rounded-3xl m-auto mt-20 px-8 py-7 shadow-2xl shadow-current"></div>',
      ),
    );
    $('.app').append($('<h1 class="text-2xl font-semibold font-sans pb-5 t">Operations</h1>'));
  }
}
