export class HttpClient {
  getData(url, method) {
    return new Promise((resolve) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url, true);
      xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          resolve(response);
        }
      };
      xhr.send();
    });
  }
}
