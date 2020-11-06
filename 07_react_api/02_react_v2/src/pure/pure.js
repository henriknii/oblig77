// Pure functions => funksjoner som ikke har noe side-effects (gjør ikke noe annet enn å håndtere inputen)

// Denne funksjonen vil alltid returnere det samme når a og b er like.
// Du vil ikke plutselig få 3 hvis a=1 og b=1
function add(a, b) {
  return a + b;
}

// Impure

// Denne funksjonen gjør mer enn bare å returnere summen og påvirker applikasjonen på flere måter ved å
// oppdatere databasen og samtidig html

function doMultipleThings(a, b) {
  const sum = a + b;
  addToDatabase(sum);
  renderHtml(sum);
  return sum;
}
