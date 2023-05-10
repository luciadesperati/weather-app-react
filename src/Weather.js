import React from "react";


import SectionForecast from "./SectionForecast";
import SectionWeather from "./SectionWeather";

export default function CardWeather() {

  return (
    <div>
      <SectionWeather />
      <SectionForecast />
    </div>
  );
}
