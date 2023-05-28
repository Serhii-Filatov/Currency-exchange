export const currencies = ['USD', 'UAH', 'EUR'];
export const crypto = ['BTC', 'BNB', 'CTX', 'LTC', 'ADA', 'RVN', 'ASX', 'SOL', 'DOT'];
export class Store {}
export function currenciesMarkup() {
  let murkup;
  currencies.forEach((element) => {
    murkup += `<option value="${element}">${element}</option>`;
  });
  return murkup;
}

export function cryptoMarkup() {
  let murkup;
  crypto.forEach((element) => {
    murkup += `<option value="${element}">${element}</option>`;
  });
  return murkup;
}
