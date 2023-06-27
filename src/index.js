import { App } from './app.js';

$('body').html('<div class="app"></div>');
const exchangeApp = new App();
exchangeApp.renderApp();

/*
const exchangeApp = new App();
$('body').html(exchangeApp.renderApp());
*/

/*
const app = new App().renderApp();
$('body').html(app);
*/

// =====================================================================================
// const currencies = [];
// const apiUrl = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';
// fetch(apiUrl).then((res) => res.json())
//   .then((data) => data.coins.forEach((element) => { currencies.push(element.name); }));

// setTimeout(() => {
//   console.log('оно', currencies);
// }, 2000);
