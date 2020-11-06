import fetch from 'node-fetch';

const URL =
  'https://data.brreg.no/enhetsregisteret/api/enheter?konkurs=false&organisasjonsnummer';

// fetch returns a response object with different properties we can use
// by default fetch will not "catch" errors with 400 or 500 errors
const status = (response) => {
  // short version is response.ok
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};

fetch(URL)
  .then(status) // resolve fetching the data then chain status() promise
  .then((response) => response.json()) // resolved status then chaining another promise converting the data to json
  .then((data) => {
    // resolve if data is ready
    console.log('JSON response', data);
  })
  .catch((error) => {
    // catch errors (or rejected promises) that may appear resolving promises
    console.log('Failed', error);
  });

// fetch with a timeout
function fetchTimeout(url, init, timeout = 3000) {
  return new Promise((resolve, reject) => {
    fetch(url, init).then(resolve).catch(reject);
    setTimeout(reject, timeout);
  });
}

// fetch with race conditions
Promise.race([
  fetch('http://url', { method: 'GET' }),
  new Promise((resolve) => setTimeout(resolve, 3000)),
]).then((response) => console.log(response));

// fetch with abort
const controller = new AbortController();

function fetchContent() {
  fetch('http://domain/service', {
    method: 'GET',
    signal: controller.signal,
  })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error('Error:', error));
}

const downloadBtn = document.querySelector('.download');
const abortBtn = document.querySelector('.abort');

downloadBtn.addEventListener('click', fetchContent);

abortBtn.addEventListener('click', function () {
  controller.abort();
  console.log('Download aborted');
});
