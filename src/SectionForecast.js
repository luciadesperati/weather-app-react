import React from "react";
import "./SectionForecast.css";

export default function SectionForecast() {
  return (
    <div className="card shadow-lg border-0 py-4 px-2 text-center">
      <div className="pt-4 mt-3 row forecast d-flex">
        <div className="col-1"></div>`
        <div className="col-2">
          <p className="weekday-list mb-0">Mon</p>
          <p className="day-list">4 Apr</p>
          <img
            className="emoji-list"
            id="weather-icon-list"
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
            alt="icon"
          />
          <span className="d-flex justify-content-center">
            <p className="temperature-min">10</p>
            <p className="temperature-max">20</p>
          </span>
        </div>
      </div>
    </div>
  );
}
