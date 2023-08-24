import { HttpClient } from '../utils/httpClient';

export class CoinService {
  httpClient;

  url = 'https://api.coinstats.app/public/v1/';

  constructor() {
    this.httpClient = new HttpClient();
  }

  async getCoins(currency = 'USD') {
    console.log('Запрос:', currency);
    const response = await this.httpClient.getData(
      `${this.url}coins?skip=0&limit=10&currency=${currency}`,
      'GET',
    );
    return response;
  }
}
