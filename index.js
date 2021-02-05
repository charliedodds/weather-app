const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
let query = 'london';
const apiKey = '&appid=8fe4e4b12806b45a982605effb769a3b';
let units = '&units=metric';

const form = document.querySelector('form');

const city = document.querySelector('#city');

const resetInput = () => {
  city.value = '';
};

const getWeather = async (e) => {
  try {
    if (e) {
      e.preventDefault();
      query = city.value;
    }
    const fullWeatherURL = `${weatherURL}${query}${apiKey}${units}`;
    const response = await fetch(fullWeatherURL);
    const data = await response.json();
    if (data.message === 'city not found') {
      throw new Error(data.message);
    }
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

form.addEventListener('submit', getWeather);
