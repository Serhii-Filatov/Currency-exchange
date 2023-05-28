import { App } from './app.js';

$('body').append(
  $(
    '<div class="app bg-orange-200 w-[491px] h-[306px] rounded-3xl m-auto mt-20 px-8 py-7 shadow-2xl shadow-current"></div>',
  )
    .append($('<h1 class="text-2xl font-semibold font-sans pb-5 t">Operations</h1>'))
    .append($('<div class="switches grid gap-4 grid-cols-2 mb-[22px]"></div>'))
    .append($('<div class="buttonExchange flex justify-end"></div>')),
);
const exchangeApp = new App();
exchangeApp.renderApp();
