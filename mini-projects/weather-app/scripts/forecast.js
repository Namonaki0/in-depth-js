import { key } from "./key.js";

const getLocationInfo = async (location) => {
  const baseUrl =
    "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${key}&q=${location}`;

  const result = await fetch(baseUrl + query);
  const data = await result.json();

  return data;
};

getLocationInfo("london")
  .then((data) => console.log(data[0]))
  .catch((err) => console.log(err));
