import { db } from './articles';
/**
 * AJAX med async/await
 *
 */

const url =
  'https://data.brreg.no/enhetsregisteret/api/enheter?konkurs=false&organisasjonsnummer=971567376';

function AJAX(url, methodType) {
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

async function getCompanyName() {
  try {
    const company = await AJAX(url, 'GET');
    if (company) {
      console.log(company._embedded.enheter[0].navn);
    }
  } catch (error) {
    console.log(error);
  }
}

getCompanyName();

/**
 *
 * Use case (som promise) - hente en en artikkel - hente alle artiklene i kategorien til artikkelen
 * Bruk av async/await gir et mye slankere uttrykk
 *
 */

const articleWorkAsync = async function (slug) {
  try {
    const article = await db.getArticle(slug);
    const category = await db.getCategory(article.slug);
    return { article, category };
  } catch (error) {
    console.log(error);
  }
};

articleWorkAsync('test');
