import React from "react";


// import SectionForecast from "./SectionForecast";
import SectionWeather from "./SectionWeather";

export default function CardWeather(props) {
  return (
    <div>
      <SectionWeather cityName={props.cityName}/>
      {/* <SectionForecast /> */}
    </div>
  );
}

