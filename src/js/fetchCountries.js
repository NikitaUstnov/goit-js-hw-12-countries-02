  
const BASE_URL = 'https://restcountries.eu/rest/v2';

function fetchCountries(countryName) {
  return fetch(`${BASE_URL}/name/${countryName}`)
    .then(response => {
      if (response.status !== 404) {
        return response.json();
      }
  
    });

}
export default {fetchCountries}  
