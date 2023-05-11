import React, { useState } from "react";

export default function WeatherTemperature(props) {
   const [unit, setUnit] = useState("temp-cel");

   function convertToFar(event) {
    event.preventDefault();
    setUnit("temp-far");
   }
  
   function showCel(event) {
    event.preventDefault();
    setUnit("temp-cel");
   }

   if (unit === "temp-cel") {
       return (
            <div>
                <p id="temperature" className="temperature mb-0">
                    {Math.round(props.celTemperature)}
                </p>

                <div className="btn-group btn-group-toggle d-flex align-items-center" id="unit">
                {/* <p>°C</p> */}
                <button
              className="btn button-temp my-0 mx-1 p-1"
              autofocus="autofocus"
              id="temp-cel"
              href="#"
            >
              °C
            </button>
          <h5 className="m-0 p-0">|</h5>
            <button
              className="btn button-temp my-0 mx-1 p-1"
              id="temp-far"
              href="#"
              onClick={convertToFar}
            >
              °F
            </button>
            </div>
            </div>
    );
   } else {
    let farTemperature = ((props.celTemperature) * 9/5) + 32;
return  (
    <div>
        <p id="temperature" className="temperature mb-0">
            {Math.round(farTemperature)}
        </p>

        <div className="btn-group btn-group-toggle d-flex align-items-center" id="unit">
        {/* <p>°C</p> */}
        <button
      className="btn button-temp my-0 mx-1 p-1"
      autofocus="autofocus"
      id="temp-cel"
      href="#"
      onClick={showCel}
    >
      °C
    </button>
  <h5 className="m-0 p-0">|</h5>
    <button
      className="btn button-temp my-0 mx-1 p-1"
      id="temp-far"
      href="#"
      onClick={convertToFar}
    >
      °F
    </button>
    </div>
    </div>
);
   }

}