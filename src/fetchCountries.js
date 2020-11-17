const countreesUrl = 'https://restcountries.eu/rest/v2/name/'

  function fetchCountries(searchQuery) {
      return fetch(countreesUrl + searchQuery)
  .then(response => {
    response.json
  }).catch(error => {
    console.log('404')
  });
}
fetchCountries()
  

console.log(countreesUrl)