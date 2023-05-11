import React from "react";
import "./SectionForecast.css";
import WeatherIcon from "./WeatherIcon";

export default function SectionForecast(props) {
  return (
    <div className="card shadow-lg border-0 py-4 px-2 text-center">
      <div className="pt-4 mt-3 row forecast d-flex">
        <div className="col-1"></div>`
        <div className="col">
          <p className="weekday-list mb-0">Mon</p>
          <p className="day-list">4 Apr</p>
          <div className="mt-4">
          <WeatherIcon size={35} condition={props.condition}/>
          </div>
          {/* <img
            className="emoji-list"
            id="weather-icon-list"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
            alt="icon"
          /> */}
          <span className="d-flex justify-content-center">
            <p className="temperature-min">10</p>
            <p className="temperature-max">20</p>
          </span>
        </div>
      </div>
    </div>
  );
}
