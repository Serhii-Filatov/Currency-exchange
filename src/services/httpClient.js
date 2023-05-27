// New

const apiUrl = 'https://api.coinstats.app/public/v1/coins?skip=0&limit=10';
const xhr = new XMLHttpRequest();
xhr.open('GET', apiUrl, true);

xhr.onreadystatechange = () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    const response = JSON.parse(xhr.responseText);
    console.log('Response:', response);
  }
};

xhr.send();
