import './style.css';

import { Base } from './components/baseComponent';
import { Options } from './components/selectComponent';
import { InputOutput } from './components/inOutComponent';
import { ExchangeBtn } from './components/btnComponent';

export class App {
  renderApp() {
    const baseComp = new Base();
    const optionsComp = new Options();
    const inOutComp = new InputOutput();
    const exchangeBtnComp = new ExchangeBtn();

    baseComp.render();
    optionsComp.render();
    inOutComp.render();
    exchangeBtnComp.render();
  }
}
