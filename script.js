const api = {
  url: 'http://api.openweathermap.org/data/2.5/',
  key: 'eca6453c758a17a632ceaf31557b0cf8',
};
// http://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&APPID=eca6453c758a17a632ceaf31557b0cf8
// Search
let searchInput = document.getElementById('search-input');
let submitSearch = document.querySelector('form');
let weather;
submitSearch.addEventListener('submit', (event) => {
  event.preventDefault();
  let query = searchInput.value;
  searchInput.value = '';

  fetch(`${api.url}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then((response) => response.json())
    .then((result) => {
      // console.log(result);
      weather = result;

      // Populate Location Data
      let location = document.getElementById('weather-location');
      location.innerHTML = weather.name + ', ' + weather.sys.country;

      //   Populate Current Temperature
      let currentTemp = document.getElementById('current-temp');
      currentTemp.innerHTML = weather.main.temp + '&deg;' + '' + 'C';

      //   Populate Feels Like Temperature

      let feelsLike = document.getElementById('feels-like');
      feelsLike.innerHTML = 'Feels Like: ' + weather.main.feels_like + '&deg;C';

      // Populate Min Temperature
      let minTemp = document.getElementById('min-temp');
      minTemp.innerHTML = 'Min Temp: ' + weather.main.temp_min + '&deg;C';

      // Populate Max Temperature
      let maxTemp = document.getElementById('max-temp');
      maxTemp.innerHTML = 'Max Temp: ' + weather.main.temp_max + '&deg;C';

      // Populate Clouds Data
      let cloud = document.getElementById('clouds');
      cloud.innerHTML = weather.weather[0].main;

      //   Populate Humidity data
      let humidity = document.getElementById('humidity');
      humidity.innerHTML = 'Humidity: ' + weather.main.humidity + '&percnt;';
    });
});
