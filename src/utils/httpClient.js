export const dataArray = [];

export class HttpClient {
  static getData() {
    const apiUrl = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';
    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl, true);
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log('Oтвет сервера:', response);
        const selectedKeys = ['symbol', 'price'];
        response.coins.forEach((obj) => {
          const filteredObj = {};
          Object.entries(obj).forEach(([key, value]) => {
            if (selectedKeys.includes(key)) {
              filteredObj[key] = value;
            }
          });
          dataArray.push(filteredObj);
        });
        console.log('Массив токенов и цен:', dataArray);
      }
    };
    xhr.send();
  }
}
