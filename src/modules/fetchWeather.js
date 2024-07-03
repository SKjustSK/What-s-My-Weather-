const weatherAPIKey = "6a893d4087894f1093e150329242906";
const baseURL = "http://api.weatherapi.com/v1";

async function fetchWeather(location) {
  // TODO: Error handling incase the location is not found by weather api
  try {
    let response = await fetch(
      `${baseURL}/forecast.json?key=${weatherAPIKey}&q=${location}&aqi=yes`
    );
    let forecastInfo = await response.json();
    return forecastInfo;
  } catch (error) {
    throw new Error(error);
  }
}

export default fetchWeather;
