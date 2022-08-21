const key = "8ltnlvaVQTAHAVd3xZ96CyRQHyfKh7FO";

const getCurrentWeather = async (locationID) => {
  const baseURI = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${locationID}?apikey=${key}`;

  const response = await fetch(baseURI + query);
  const data = await response.json();

  return data[0];
};

const getLocationInfo = async (location) => {
  const baseURI =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${location}`;

  const response = await fetch(baseURI + query);
  const data = await response.json();

  return data[0];
};
