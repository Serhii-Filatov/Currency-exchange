//  * КОНВЕРТОР ВАЛЮТ *
//  * Resources about JS and HTTP *
//    - callback, promise, async/await - (https://learn.javascript.ru/async)
//    - URL - (https://ru.wikipedia.org/wiki/URL)
//    - HTTP request, methods, statusCodes
//    - async requests, xhr - (https://learn.javascript.ru/xmlhttprequest)
//    - create class HttpClient wrapper for XHR which will be use in services
//    - use components, service (MVC architect) like in task about calculator
//    - more (https://youtu.be/X85soC5evw0)
//    - API for requests - (https://documenter.getpostman.com/view/5734027/RzZ6Hzr3?version=latest)
//    - design ( only widget with exchange [orange] )
//    - (https://cdn.dribbble.com/userupload/3011895/file/original-6d87a511ca31cdc7d419a60a9e257e69.png?compress=1&resize=1905x1429)

import './style.css';

$('body')
  .append($('<div class="app bg-orange-200 w-[491px] h-[306px] rounded-3xl m-auto mt-20 px-8 py-7 shadow-2xl shadow-current"></div>'));
$('.app')
  .append($('<h1 class="text-2xl font-semibold font-sans pb-5 t">Operations</h1>'))
  .append($('<div class="switches grid gap-4 grid-cols-2 mb-[22px]"></div>'));
$('.switches')
  .append($('<div><select class="w-[203px] h-[51px] pl-6 rounded-lg shadow-lg shadow-slate-500/60"><option value="USD">USD</option><option value="BTC">BTC</option></select></div>'))
  .append($('<div><select class="w-[203px] h-[51px] pl-6 rounded-lg mb-[5px] shadow-lg shadow-slate-500/60"><option value="BTC">BTC</option><option value="USD">USD</option></select></div>'))
  .append($('<div><input type="number" placeholder="0.00" class="w-[203px] h-[51px] p-6 rounded-lg text-lg shadow-lg shadow-slate-500/60"></div>'))
  .append($('<div><input type="number" placeholder="0.00" class="w-[203px] h-[51px] p-6 rounded-lg text-lg shadow-lg shadow-slate-500/60"></div>'));
$('.app')
  .append($('<div class="btn flex justify-end"></div>'));
$('.btn')
  .append('<button type="button" class="w-[203px] h-[47px] bg-slate-950 shadow-lg shadow-slate-500/60 hover:shadow-slate-700/30  text-white text-base rounded-lg">Exchange</button>').on('click', () => { console.log('test'); });
