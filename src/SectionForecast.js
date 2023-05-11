import React, { useState, useEffect } from "react";
import "./SectionForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function SectionForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    console.log(response.data);
    setForecast(response.data.daily);
    setLoaded(true);
  };

  if(loaded) {
console.log(forecast);

    return (
      <div className="card shadow-lg border-0 py-4 px-0 text-center">
        <div className="pt-2 py-0 mt-3 row forecast d-flex flex-row justify-content-center">
          <div className="col-2">
            <WeatherForecastDay data={forecast[0]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[1]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[2]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[3]} />
          </div>
          <div className="col-2">
            <WeatherForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "2b6be0a88f02eco343b0c579f343cbt9";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
   
    return null;
  
}
}
