import './style.css';
import { Field } from './components/fieldComponent';
import { Options } from './components/selectComponent';
import { OutputInput } from './components/outputInputComponent';
import { ExchangeButton } from './components/buttonComponent';
import { HttpClient } from './utils/httpClient';

export class App {
  renderApp() {
    HttpClient.getData();
    setTimeout(() => {
      const app = $('div .app');

      const fieldComponent = new Field();
      const optionsComponent = new Options();
      const outputInputComponent = new OutputInput();
      const exchangeButtonComponent = new ExchangeButton();

      app
        .append(fieldComponent.render())
        .append(optionsComponent.render())
        .append(outputInputComponent.render())
        .append(exchangeButtonComponent.render());
    }, 500);
  }
}
