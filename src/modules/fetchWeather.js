const weatherAPIKey = "6a893d4087894f1093e150329242906";
const baseURL = "http://api.weatherapi.com/v1";

async function fetchWeather(location) {
  let response = await fetch(
    `${baseURL}/forecast.json?key=${weatherAPIKey}&q=${location}&aqi=yes`
  );
  let forecastInfo = await response.json();
  return forecastInfo;
}

export default fetchWeather;
