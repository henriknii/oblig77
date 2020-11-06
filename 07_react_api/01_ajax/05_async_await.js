const doSomethingAsync = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('I did something'), 5000);
  });

const doMoreAsync = () =>
  new Promise((resolve) => {
    setTimeout(() => resolve('I did something more'), 0);
  });

const doSomething = async () => {
  const result1 = await doSomethingAsync();
  const result2 = await doMoreAsync();
  console.log(result1);
  console.log(result2);
};

const doSomethingNotAwait = () => {
  console.log('Not waiting for anyone');
};

doSomething();
doSomethingNotAwait();

/**
 *
 * Fake promise
 *
 */

const someFunc = async () => 'test';
someFunc().then((res) => console.log(res));

const sameFunc = async () => Promise.resolve('test');
sameFunc().then((res) => console.log(res));

function buildHouseApi(type) {
  // resolver ikke før den er ferdig
  return new Promise((resolve, reject) => {
    // resolve når ferdig
    if (type === 'Skyskraper') {
      reject('Async: Vi bygger ikke skyskrapere');
    }
    const randomValue = Math.floor(Math.random() * 2000) + 1;
    setTimeout(() => {
      resolve(`Async: ${type}`);
    }, randomValue);
  });
}

/**
 * Formbuilding eksempel med asyn/await
 *
 */

const handleHouseBuilding = async () => {
  const houseAsync1 = await buildHouseApi('Moderne');
  // let houseAsync2 = await buildHouseAsync("Skyskraper");
  const houseAsync3 = await buildHouseApi('Funkis');
  console.log(houseAsync1);
  console.log(houseAsync1);
  const multipleHousesAwait = await Promise.all([houseAsync1, houseAsync3]);
  console.log(multipleHousesAwait);
};

// handleHouseBuilding();
