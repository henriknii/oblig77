/* eslint-disable no-shadow */
const done = true;

const isItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is the thing I built';
    resolve(workDone);
  } else {
    const why = 'Still working on something else';
    reject(why);
  }
});

const checkIfItsDone = () => {
  isItDoneYet
    .then((ok) => {
      console.log(ok);
    })
    .catch((err) => {
      console.error(err);
    });
};

const anotherFunctionInsideTimeout = () => {
  console.log('Continue with me when setTimeout is done');
};

const anotherFunctionOutsideTimeout = () => {
  console.log('Continue with me while waiting for promise and setTimeout');
};

setTimeout(() => {
  console.log('... setTimout');
  anotherFunctionInsideTimeout();
}, 0);

// For å illustrere hvordan JavaScript håndterer asynkron kode
checkIfItsDone();
anotherFunctionOutsideTimeout();

/**
 * Promises.all() => waiting for all to be resolved
 *
 */

const anotherIsItDoneYet = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'Here is another thing I built';
    resolve(workDone);
  } else {
    const why = 'Did not resolve';
    reject(why);
  }
});

Promise.all([isItDoneYet, anotherIsItDoneYet])
  .then((res) => {
    console.log('Array of results', res);
  })
  .catch((err) => {
    console.error(err);
  });

/**
 *
 * Promises.race()
 *
 */

const slow = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'I am faster';
    setTimeout(resolve, 1000, workDone);
  } else {
    const why = 'Did not resolve';
    reject(why);
  }
});

const slower = new Promise((resolve, reject) => {
  if (done) {
    const workDone = 'I am 1 second slower';
    setTimeout(resolve, 2000, workDone);
  } else {
    const why = 'Did not resolve';
    reject(why);
  }
});

Promise.race([slow, slower]).then((result) => {
  console.log(result); // I am faster
});

/**
 *
 * Flere eksempler
 *
 */

function buildHouse(type) {
  // resolver ikke før den er ferdig
  return new Promise((resolve, reject) => {
    // resolve når ferdig
    if (type === 'Skyskraper') {
      reject(new Error('Vi bygger ikke skyskrapere'));
    }
    // kun til bruk for å gjøre det random hvem som resolver først
    const randomValue = Math.floor(Math.random() * 2000) + 1;
    setTimeout(() => {
      resolve(type);
    }, randomValue);
  });
}

// promises gjør det enklere å chaine ting som er avhengig av hverandre enn callbackhell men kalles promiseland
const singleHouseBuilder = buildHouse('Moderne').then((house) => {
  console.log('Første hus ferdig: ', house);
  return buildHouse('Tradisjonelt').then((house) => {
    console.log('Hus nummer 2 ferdig: ', house);
    return buildHouse('Funkis').then((house) => {
      console.log('Hus nummer 3 ferdig: ', house);
    });
  });
});

const house1 = buildHouse('Moderne');
const house2 = buildHouse('Tradisjonelt');
const house3 = buildHouse('Funkis');
const house4 = buildHouse('Skyskraper');

// Resolver kun når alle er ferdig og alle resolver
const multipleHouseBuilders = Promise.all([house1, house2, house3])
  .then(([house1, house2, house3]) => {
    console.log(house1, house2, house3);
  })
  .catch((err) => console.log(err));

const multipleHouseBuildersFails = Promise.all([house1, house4])
  .then(([house1, house4]) => {
    console.log(house1, house4);
  })
  .catch((err) => console.log(err)); // Vi bygger ikke skyskrapere. Gir kun feilmelding da en rejecter

const multipleHouseBuildersSettled = Promise.allSettled([
  house1,
  house2,
  house3,
  house4,
])
  .then(([house1, house2, house3, house4]) => {
    console.log(house1, house2, house3, house4);
  })
  .catch((error) => console.log(error));

// Promise Race

const firstHouseFinished = Promise.race([house1, house2, house3]).then(
  (house) => {
    console.log(house);
  }
);
