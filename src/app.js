import './style.css';

import { Options } from './components/selectComponent';
import { OutputInput } from './components/OutputInputComponent';
import { ButtonExchange } from './components/buttonComponent';

export class App {
  renderApp() {
    const app = $('div .app');

    const optionsComponent = new Options();
    const OutputInputComponent = new OutputInput();
    const exchangeBtnComponent = new ButtonExchange();

    app
      .append(optionsComponent.render())
      .append(OutputInputComponent.render())
      .append(exchangeBtnComponent.render());
  }
}
