import "./styles.css";
import API from "./js/fetchCountries"; 
import templateCoutry from "./templates/country-card.hbs";
import countriesToTen from "./templates/countries-to-ten.hbs"
var debounce = require('lodash.debounce');
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

const serchInputRef = document.getElementById('serch-input')
const templateCoutryRef = document.getElementById('result')

serchInputRef.addEventListener('input', debounce(onSearch, 500))


function renderCountryCard(country) {   
    if (country.length === 1) {
        templateCoutryRef.innerHTML = templateCoutry(country);
    } else if (country.length >= 2 && country.length <= 10) {
       templateCoutryRef.innerHTML = countriesToTen(country);
    } else if (country.length > 10) { 
        pushError('Сделайте более специфичный запрос. Слишком много совпадений!!');
    }; 
    
}

function pushError(err) {
  error({
    text: `${err}`,
  });
}


function clearResult() { 
    serchInputRef.innerHTML = '';
    templateCoutryRef.innerHTML = '';
    templateCoutryRef.innerHTML = '';
    
}

function onSearch(e) { 
    e.preventDefault();
    const searchQuery = serchInputRef.value;
    console.log(searchQuery)
    if (searchQuery.length === 0) {
        clearResult();
        return;
    } else { 
        API.fetchCountries(searchQuery)
        .then(renderCountryCard)
        .catch(error => pushError('Ошибка ввода, такой страны не существует'));
    }

}