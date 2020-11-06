/**
 *
 * Basic eksempel på Callback
 *
 */

const element = document.querySelector('className');
element.addEventListener('click', cb);
element.addEventListener('click', () => {
  console.log('clicked');
});

function cb() {
  console.log('clicked');
}

/**
 *
 * Basic eksempel fra Express
 *
 */

app.get('/', (req, res) => {
  console.log(req, res);
});

const cb2 = (req, res) => {
  res.status(200).json({ success: true, data: { msg: 'Hello' } });
};

app.get('/', cb2);

/**
 *
 * Basic eksempel på Callback med eksempel fra array.map()
 * Fikk et spørsmål om hvorfor man kunne bare legge inn en peker til en funksjon
 * inn i map uten å spesifisere parametrene
 * 
 * Hvordan vet array.map() hva parametrene er?
 * 
 */

 /**
  * 
  *  Beskrivelsen av array.map()
  *  Tar i mot en callback som igjen tar i mot en required og 2 optional parametre
  * 
  * */ 

let new_array = array.map(function callback( currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])

 const storBokstav = (bokstav, index, arr, t) => {
    console.log(bokstav.toUpperCase(), index, arr, t);
}

const array = ["hei", "på", "deg"];

// 4 måter å bruke array.map på

array.map(elm => storBokstav(elm)); 

/**
 * HEI
 * PÅ
 * DEG
 */

array.map((elm, index) => storBokstav(elm, index));

/**
 * HEI 0
 * PÅ 1
 * DEG 2
 */


array.map(function(elm) {
    storBokstav(elm);
})

/**
 * HEI
 * PÅ
 * DEG
 */

array.map(storBokstav); // Implisitt at parametrene i storBokstav er henholdsvis currentValue, index og arr

/*
HEI 0 [ 'hei', 'på', 'deg' ] undefined => t er undefined da den ikke er en del av map
PÅ 1 [ 'hei', 'på', 'deg' ] undefined
DEG 2 [ 'hei', 'på', 'deg' ] undefined
*/




/**
 *
 * Basic eksempel på Callback uten Callback Hell
 *
 */

const TIME = 5000;

const warmPizza = () => {
  console.log('Pizzaen er klar');
};

setTimeout(() => {
  warmPizza();
}, TIME);

console.log(`Pizzaen er klar om ${TIME / 1000} sekunder`);

/**
 *
 * Basic eksempel på Callback med Callback Hell
 *
 */

setTimeout(() => {
  console.log('Start');
  setTimeout(() => {
    console.log('Gjør noe som var avhengig av start');
    setTimeout(() => {
      console.log(
        'Gjør noe som var avhengig av start som igjen var avhengig av noe som var avhengig av start'
      );
    }, 0);
  }, 0);
}, 0);
