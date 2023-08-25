import { CoinService } from '../services/coinService';

class Store {
  currencies = ['USD', 'EUR', 'UAH'];

  coinService;

  coins = [];

  static instance;

  constructor() {
    this.coinService = new CoinService();
  }

  async getCoins(currency) {
    const data = await this.coinService.getCoins(currency);
    this.coins = data.coins;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Store();
    }
    return this.instance;
  }
}

export const store = Store.getInstance();
