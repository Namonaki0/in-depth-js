class Forecast {
  constructor() {
    this.key = "8ltnlvaVQTAHAVd3xZ96CyRQHyfKh7FO";
    this.currentCondBaseURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
    this.locationsBaseURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
  }
  async updateLocation(inputValue) {
    const cityDetails = await this.getLocationInfo(inputValue);
    const weather = await this.getCurrentWeather(cityDetails.Key);

    return { cityDetails, weather };
  }
  async getLocationInfo(location) {
    const query = `?apikey=${this.key}&q=${location}`;
    const response = await fetch(this.locationsBaseURI + query);
    const data = await response.json();

    return data[0];
  }
  async getCurrentWeather(locationID) {
    const query = `${locationID}?apikey=${this.key}`;
    const response = await fetch(this.currentCondBaseURI + query);
    const data = await response.json();

    return data[0];
  }
}
