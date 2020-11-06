import fetch from 'node-fetch';

const URL =
  'https://data.brreg.no/enhetsregisteret/api/enhet234er?konkurs=false&organisasjonsnummer=971567376';

const status = (response) => {
  console.log(response);
  if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  }
  return Promise.reject(new Error(response.statusText));
};

const getCompanyData = async () => {
  const response = await fetch(URL);
  try {
    const statusPromise = await status(response).catch(err => console.log(err));
    const data = await statusPromise.json().catch(err => console.log(err));
    console.log(data);
  } catch (error) {
    console.log(error)    
  }
};

getCompanyData();