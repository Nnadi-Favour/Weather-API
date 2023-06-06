/// Select elements
const locationInput = document.querySelector("#location");
const weatherData = document.querySelector("#weather-data");
const locationName = document.querySelector("#location-name");
const condition = document.querySelector("#condition");
const forecast = document.querySelector("#forecast");
const temperature = document.querySelector("#temperature");

// API Key
const API_KEY = "4f8968c45034647545861caf624c32c2";

// Form submit event listener
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();

  // Get location from input
  const location = locationInput.value;

  // API URL
  const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  // Fetch data from API
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      // Display data
      locationName.textContent = data.name;
      condition.textContent = data.weather[0].description;
      forecast.textContent = data.weather[0].main;
      temperature.textContent = data.main.temp + "°C";
    })
    .catch((error) => {
      console.error(error);
    });
});
