import React from "react";
import SectionWeather from "./SectionWeather";

export default function CardWeather(props) {
  return (
    <div>
      <SectionWeather cityName={props.cityName}/>
    </div>
  );
}

