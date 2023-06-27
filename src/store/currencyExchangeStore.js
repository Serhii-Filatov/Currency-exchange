import { dataArray } from '../utils/httpClient';

export function setMarkup() {
  let murkup;
  dataArray.forEach((element) => {
    murkup += `<option value="${element.price}">${element.symbol}</option>`;
  });
  return murkup;
}
