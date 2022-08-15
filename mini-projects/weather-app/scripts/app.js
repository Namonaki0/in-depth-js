const cityForm = document.querySelector("form");

const updateLocation = async (inputValue) => {
  const cityDetails = await getLocationInfo(inputValue);
  const weather = await getCurrentWeather(cityDetails.Key);

  return { cityDetails, weather };
};

cityForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = cityForm.city.value.trim();
  cityForm.reset();

  updateLocation(inputValue)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
