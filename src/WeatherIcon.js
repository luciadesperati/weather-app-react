import React from "react";
import ReactAnimatedWeather from 'react-animated-weather-updated';

export default function WeatherIcon(props) {
console.log(props.condition);

    const codeMapping = {
    "clear-sky-day": "CLEAR_DAY",
    "clear-sky-night": "CLEAR_NIGHT",
    "few-clouds-day": "PARTLY_CLOUDY_DAY",
    "ew-clouds-night": "PARTLY_CLOUDY_DAY",
    "scattered-clouds-day": "CLOUDY",
    "scattered-clouds-night": "CLOUDY",
    "broken-clouds-day": "CLOUDY",
    "broken-clouds-night": "CLOUDY",
    "shower-rain-day" : "RAIN",
    "shower-rain-night" : "RAIN",
    "rain-day" : "RAIN",
    "rain-night" : "RAIN",
    "thunderstorm-day" : "RAIN",
    "thunderstorm-night" : "RAIN",
    "snow-day" : "SNOW",
    "snow-night" : "SNOW",
    "mist-day" : "WIND",
    "mist-night" : "WIND"
    }

    return (
        <div className="d-flex justify-content-center">
        {/* <img
                alt={props.alt}
                className="emoji"
                id="weather-icon"
                src={props.icon} /> */}

<ReactAnimatedWeather
    icon={codeMapping[props.icon]}
    color="black"
    size={props.size}
    animate={true}
  />
            
                </div>
    );
}