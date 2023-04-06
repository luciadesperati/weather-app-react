import React from "react";
import "./Footer.css";

export default function CardWeather() {
  return (
    <div className="mt-4 text-center text-secondary">
      <span className="footer">
        <p>
          <a href="https://github.com/luciadesperati/weather-app-react" target="_blank" rel="noreferrer">
          Open-source code,{" "}
          </a>
          by{" "}
          <a href="https://luciadesperati.com" target="_blank" rel="noreferrer">
            Lucia Desperati
          </a>
          {/* {" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/luciadesperati/vanilla-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>{" "}
          and hosted on{" "}
          <a href="https://netlify.com" target="_blank" rel="noreferrer">
            Netlify
          </a> */}
        </p>
      </span>
    </div>
  );
}
