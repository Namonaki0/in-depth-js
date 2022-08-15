const key = "8ltnlvaVQTAHAVd3xZ96CyRQHyfKh7FO";

const getCurrentWeather = async (locationId) => {
  const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${locationId}?apikey=${key}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();

  return data[0];
};

const getLocationInfo = async (location) => {
  const baseUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${location}`;

  const response = await fetch(baseUrl + query);
  const data = await response.json();

  return data[0];
};
