/**
 * AJAX med callback
 * Hvis flere AJAX kall så må vi bruke alle de samme stegene nedenfor
 * Blir komplekst når det i et AJAX-kall krever flere callbacks og errorhåndtering må repeteres (se fiktivt usecase)
 *
 */

const url =
  'https://data.brreg.no/enhetsregisteret/api/enheter?konkurs=false&organisasjonsnummer=971567376';

function AJAX(methodType, url, callback) {
  const xhr = new XMLHttpRequest(); // initialisere XMLHttpRequest som kan brukes til å sende req til server
  xhr.open(methodType, url, true); // bestemmer metode, url og true for async
  xhr.onreadystatechange = function () {
    // lytter til "statusen" og "endringer"
    // ser på statusen på responsen (readyState går fra 0-4 hvor 4 er behandlet request, connection stengt og response sendt)
    // status 200 om statusen feilet eller er OK
    if (xhr.readyState === 4 && xhr.status === 200) {
      // callbacken er metoden som sendes med der AJAX kalles for å behandle responsen
      callback(JSON.parse(xhr.response)); // response fra serveren
    }
  };
  xhr.send();
  console.log('request sent to the server');
}

function renderCompanyData(data) {
  console.log(data._embedded.enheter[0].navn);
}

// sender med peker til funksjonen da den blir kalt i AJAX
AJAX('GET', url, renderCompanyData);

/**
 *
 * Use case - hente en en artikkel - hente alle artiklene i kategorien til artikkelen - logge til analyseserver
 * Utfordringen nedenfor er at enkelte av metodene igjen kan ha callbacks som kompliserer
 * Errorhåndtere må også dupliseres hele veien
 *
 */

const articleWork = function (slug, callback) {
  dataBase.getArticle(username, slug, (error, article, userInfo) => {
    if (error) {
      callback(error);
    } else {
      dataBase.getCategory(article.category.slug, (error, category) => {
        if (error) {
          callback(error);
        } else {
          dataBase.logAccess(username, (error) => {
            if (error) {
              callback(error);
            } else {
              callback(null, userInfo);
            }
          });
        }
      });
    }
  });
};
