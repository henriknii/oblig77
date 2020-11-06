import fetch from 'node-fetch';

const handleTryCatch = async (promise) => {
  try {
    const response = await promise;
    const data = await response.json();
    if (!data) return {};
    return { data };
  } catch (err) {
    return { error: err };
  }
};

const URL =
  'https://data.brreg.no/enhetsregisteret/api/enheter?konkurs=false&organisasjonsnummer';

const getCompanyData = async () => {
  const { data, error } = await handleTryCatch(fetch(URL));
  console.log(data, error);
};

const getCompanyDataDirect = async () => {
  const data = await fetch(URL)
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      return Promise.reject(response);
    })
    .catch(function (err) {
      return err;
    });
  console.log(data);
};

// getCompanyData();
// getCompanyDataDirect();
