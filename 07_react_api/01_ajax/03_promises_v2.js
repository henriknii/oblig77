/**
 *
 *  ASYNC / AWAIT
 *  Alle steder du har lært om hvor du kan lage funksjoner kan du også knytte til async og await
 *
 */

/**
 *
 * Når du gjør en funksjon async så vil den automagisk returnere en promise
 * Kan derfor bruker vanlig promis errorhandling
 *
 */

async function asyncCalc(value, divider) {
  return new Promise((resolve, reject) => {
    if (divider === 0) {
      reject(new Error('Kan ikke dele på 0'));
    }
    resolve(value / divider);
  });
}

const handleError = (err) => {
  console.log('Gikk ikke helt som det skulle ...');
  console.log(err);
  return err;
};

async function handleCalculationsTryCatch() {
  try {
    const diviation = await asyncCalc(2, 1); // 2
    const diviation2 = await asyncCalc(2, 1).then((res) => res); // 2
    const diviationFail = await asyncCalc(2, 0).catch((err) => err); // err
    const diviationFailWithHandler = await asyncCalc(2, 0);
  } catch (e) {
    console.log(e);
  }
}

// handleCalculationsTryCatch();

async function handleCalculationsGlobalCatch() {
  const diviation = await asyncCalc(2, 1); // 2
  const diviation2 = await asyncCalc(2, 1).then((res) => res); // 2
  const diviationFail = await asyncCalc(2, 0).catch((err) => err); // err
  const diviationFailWithHandler = await asyncCalc(2, 0);
}

// handleCalculationsGlobalCatch().catch(handleError);

// Med HOF for gjenbrukbarhet

function catchAsyncErrors(fn, customErrorHandler) {
  return function (params) {
    return fn(params).catch(customErrorHandler);
  };
}

// catchAsyncErrors(handleCalculationsGlobalCatch, handleError)();

/**
 *
 * Simulate API
 *
 */

const wait = (ms = 0) => {
  console.log('Venter ...');
  return new Promise((resolve) => setTimeout(resolve, ms));
};

const httpGet = (config) => {
  const { url, flag } = config;
  return new Promise(async (resolve, reject) => {
    await wait(2000);
    console.log('Ferdig å vente ...');
    if (flag !== 200) {
      reject(new Error('Noe gikk feil'));
    }
    resolve(`Her kommer dataen fra url: ${url}`);
  });
};

const dataFromApi = async (config) => {
  const data = await catchAsyncErrors(httpGet, handleError)(config);
  const content = `<p>${data}</p>`;
  const el = document.createElement('section');
  document.body.appendChild(el);
  el.innerHTML = content;
};

// dataFromApi({url: "/test", flag: 200});

/**
 *
 *  Simple fetch
 *
 */

const url = 'https://randomuser.me/api/?results=2';

const fetchData = async () => {
  fetch(url)
    .then((resp) => resp.json()) // Transform the data into json
    .then(function (data) {
      const content = `<p>${JSON.stringify(data)}</p>`;
      const el = document.createElement('section');
      document.body.appendChild(el);
      el.innerHTML = content;
    });
};

fetchData();
