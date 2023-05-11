import React from "react";
import ReactAnimatedWeather from 'react-animated-weather-updated';

export default function WeatherIcon(props) {
console.log(props.condition);

    const codeMapping = {
    "clear sky": "CLEAR_DAY",
    "few clouds": "PARTLY_CLOUDY_DAY",
    "scattered clouds": "CLOUDY",
    "overcast clouds": "CLOUDY",
    "broken clouds" : "PARTLY_CLOUDY_DAY",
    "shower rain" : "RAIN",
    "rain" : "RAIN",
    "thunderstorm" : "RAIN",
    "snow" : "SNOW",
    "mist" : "WIND"
    }

    return (
        <div className="mb-3">
        {/* <img
                alt={props.alt}
                className="emoji"
                id="weather-icon"
                src={props.icon} /> */}

<ReactAnimatedWeather
    icon={codeMapping[props.condition]}
    color="black"
    size={45}
    animate={true}
  />
            
                </div>
    );
}