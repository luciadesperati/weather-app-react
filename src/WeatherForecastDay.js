import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecastDay.css";


export default function WeatherForecastDay(props) {

    function number() {
        let date = new Date(props.data.time * 1000);
        let currentDateNumber = date.getDate();
        return currentDateNumber;
}
    function month() {
    let date = new Date(props.data.time * 1000);
    let months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
      ];
    let month = date.getMonth();

    return months[month]; 
}


 function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ]

return days[day];

 }


    return (
        <div>
            <p className="weekday-list mb-0">{day()}</p>
            <p className="day-list">{number()} {month()}</p>
            <div className="my-3">
            <WeatherIcon size={35} icon={props.data.condition.icon}/>
            </div>
            {/* <img
              className="emoji-list"
              id="weather-icon-list"
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png"
              alt="icon"
            /> */}
            <span className="d-flex justify-content-center">
              <p className="temperature-min">{Math.round(props.data.temperature.minimum)}°</p>
              <p className="temperature-max">{Math.round(props.data.temperature.maximum)}°</p>
            </span>
        </div>
    );
}