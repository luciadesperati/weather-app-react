import React from "react";
import "./SectionWeather.css";

export default function SectionWeather() {
  return (
    <div className="card shadow-lg border-0 py-4 my-4 px-2 text-center">
      <div className="card-body p-4">
        <div className="row">
          <div className="col">
            <img
              alt="weather"
              className="emoji"
              id="weather-icon"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png"
            />
            <div className="d-flex align-items-start justify-content-center">
              <p id="temperature" className="temperature mb-0">
                19
              </p>
              <div className="btn-group btn-group-toggle d-flex">
                <p>°C</p>
                {/* <button
              className="btn button-temp my-0 mx-1 p-1"
              autofocus="autofocus"
              id="temp-cel"
              href="#"
            >
              °C
            </button>
          <h4 className="m-0 p-0">|</h4>
            <button
              className="btn button-temp my-0 mx-1 p-1"
              id="temp-far"
              href="#"
            >
              °F
            </button> */}
              </div>
            </div>
            <div className="weather-data">
              <p className="mb-2 weather-description" id="weather-description">
                Clear Sky
              </p>
              <p className="mb-4">
                Humidity: <span id="humidity"> 75</span>% ⸺ Wind:
                <span id="wind">4</span> km/h
              </p>
            </div>
            <div className="location mb-2 mt-4">
              <p id="city-name" className="location d-inline">
                Brighton
              </p>
            </div>
            <div className="date mb-2">
              <i className="fa-regular fa-calendar date-icon"></i>
              <p id="date-display" className="date d-inline mb-4">
                Monday, 6 March 2023
              </p>
            </div>
            <div id="weather-forecast"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
