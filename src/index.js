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
