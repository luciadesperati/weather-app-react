import React, { useState } from "react";

import axios from "axios";
import "./SectionWeather.css";

import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";
import FormattedDate from "./FormattedDate";

export default function SectionWeather(props) {
const [cityName, setCityName] = useState("London");
const [weatherData, setWeatherData] = useState({ ready: false });

const handleSubmit = (event) => {
event.preventDefault();
search();
};

const handleChange = (event) => {
  setCityName(event.target.value);
}

function search() {
  const apiKey = "2b6be0a88f02eco343b0c579f343cbt9";
  const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&unit=metric`;
  axios.get(apiUrl).then(handleResponse);
} 

function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
    city: cityName,
    icon: response.data.condition.icon_url,
    condition: response.data.condition.description,
    temperature: response.data.temperature.current,
    humidity: response.data.temperature.humidity,
    wind: response.data.wind.speed,
    date: new Date(response.data.time * 1000)
  });
} 

if (weatherData.ready) {
  return (
    <><div className="card shadow-lg border-0 my-4 py-4 px-2">
      <div className="card-body border-0">
        <form id="form" className="d-flex w-100" onSubmit={handleSubmit}>
          <input
            id="city-input"
            className="form-control"
            type="search"
            placeholder="Type a city..."
            value={cityName}
            onChange={handleChange} />
          <button className="btn btn-dark mx-2" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div><div className="card shadow-lg border-0 py-4 my-4 px-2 text-center">
        <div className="card-body p-4">
          <div className="row">
            <div className="col">
              <WeatherIcon icon={weatherData.icon} condition={weatherData.condition} />
              
              <div className="d-flex align-items-start justify-content-center">
                <WeatherTemperature celTemperature={weatherData.temperature} />
              </div>
              <div className="weather-data">
                <p className="mb-2 weather-description" id="weather-description">
                  {weatherData.condition}
                </p>
                <p className="mb-4">
                  Humidity: <span id="humidity"> {weatherData.humidity}</span>% ⸺ Wind:
                  <span id="wind">{weatherData.wind}</span> km/h
                </p>
              </div>
              <div className="location mb-2 mt-4">
                <p id="city-name" className="location d-inline">
                  {weatherData.city}
                </p>
              </div>
              <div className="date mb-2">
                <i className="fa-regular fa-calendar date-icon"></i>
                <div id="date-display" className="date d-inline mb-4">
                  <FormattedDate date={weatherData.date} />
                </div>
              </div>
              <div id="weather-forecast"></div>
            </div>
          </div>
        </div>
      </div></>
  );
            }  else {
    search();

    return "Loading...";
    }
    


}
