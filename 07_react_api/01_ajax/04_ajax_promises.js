/**
 *
 * AJAX med Promise. Brukes når vi har asynkront kall hvor vi "venter" på svaret
 *
 */

import { db } from './articles';

const url =
  'https://data.brreg.no/enhetsregisteret/api/enheter?konkurs=false&organisasjonsnummer=971567376';

function AJAX(url, methodType) {
  // returnerer en promise som har en resolve og reject callback-handler
  // callbackene mapper til henholdsvis Promise.then og Promise.catch
  return new Promise(function (resolve, reject) {
    const xhr = new XMLHttpRequest();
    xhr.open(methodType, url, true);
    xhr.send();
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          const { response } = xhr;
          resolve(JSON.parse(response));
        } else {
          reject(xhr.status);
        }
      } else {
        console.log('xhr not done');
      }
    };
    console.log('request sent succesfully');
  });
}

function getCompanyName() {
  AJAX(url, 'GET').then(
    (data) => console.log(data._embedded.enheter[0].navn),
    (status) => console.log(status)
  );
  AJAX(url, 'GET')
    .then((data) => console.log(data._embedded.enheter[0].navn))
    .catch((status) => console.log(status));
}

getCompanyName();

/**
 *
 * Use case (som promise) - hente en en artikkel - hente alle artiklene i kategorien til artikkelen
 * Bruk av Promises gir et mye slankere uttrykk
 *
 */

const articleWork = function (slug) {
  db.getArticle(slug)
    .then((article) => db.getCategory(article.slug))
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
};

articleWork('test');
