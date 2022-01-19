const api = {
  url: 'http://api.openweathermap.org/data/2.5/',
  key: 'eca6453c758a17a632ceaf31557b0cf8',
};

fetch(`${api.url}weather?q=london&units=metric&APPID=${api.key}`)
  .then((res) => res.json())
  .then((data) => {
    let weather = data;
    console.log(weather.sys.country);

    let location = document.querySelector('weather-location');
    let p = document.createElement('p');
    p.innerHTML = '<h1>Hello</h1>';
  })
  .catch((err) => {
    throw new Error(err);
  });
