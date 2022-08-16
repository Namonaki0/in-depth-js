const cityForm = document.querySelector("form");
const card = document.querySelector(".card");
const cardDetails = document.querySelector(".details");
const cardImg = card.querySelector("img");
const cardIcon = card.querySelector(".icon img");

const updateUI = (data) => {
  const { cityDetails, weather } = data;

  cardDetails.innerHTML = `
    <h5 class="my-3">${cityDetails.EnglishName}</h5>
      <div class="my-3">${weather.WeatherText}</div>
        <div class="display-4 my-4">
            <span>${weather.Temperature.Metric.Value}</span>
            <span>&deg;C</span>
        </div>
  `;

  //? condition to check if day or night
  const timeOfDay = weather.IsDayTime ? "img/day.svg" : "img/night.svg";
  cardImg.setAttribute("src", timeOfDay);

  //? matches icon number in weather object to local icons and sets as attribute
  let icon = `img/icons/${weather.WeatherIcon}.svg`;
  cardIcon.setAttribute("src", icon);

  //? removes d-none class on submit
  if (card.classList.contains("d-none")) {
    card.classList.remove("d-none");
  }
};

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
    .then((data) => updateUI(data))
    .catch((err) => console.log(err));
});
