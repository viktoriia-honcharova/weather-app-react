import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import axios from "axios";
import Main from "./img/main-photo.JPEG";

import Current from "./Current";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Prediction from "./Prediction";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      wind: Math.round(response.data.wind.speed),
      city: response.data.city,
      humidity: response.data.temperature.humidity,
      iconUrl: response.data.condition.icon_url,
      iconDesc: response.data.condition.description,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="main-content col-sm-8">
            <div className="content-top">
              <form id="search-form">
                <input
                  type="search"
                  placeholder="Enter a city"
                  autoFocus="off"
                  autoComplete="off"
                  className="input"
                  id="input"
                />
                <input
                  type="submit"
                  value="Search"
                  className="search-button"
                  id="search-button"
                />
                <button className="current-location" id="current-location">
                  {" "}
                  <span>📍</span>
                </button>
              </form>
              <section className="weather-img">
                <img src={Main} alt="" className="background" />
                <div className="weather-data">
                  <h2 className="city-name" id="city-name">
                    {weatherData.city}
                  </h2>
                  <p className="day-time">Friday, 21:00</p>
                  <img
                    src={weatherData.iconUrl}
                    alt={weatherData.iconDesc}
                    className="main-weather"
                    id="currennt-weather-icon"
                  />
                  <h1 className="current-temp">
                    <span id="current-temp">{weatherData.temperature}</span>
                    <span className="degree-singht"> °C</span>
                  </h1>
                </div>
              </section>
            </div>
            <div className="content-bottom">
              <div className="row bottom-row">
                <Humidity />
                <Wind />
              </div>
            </div>
          </div>
          <div className="prediction col-sm-4" id="forecast">
            <Prediction />
            <Prediction />
            <Prediction />
            <Prediction />
            <Prediction />
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "474ot518db9444a6f4583f30efc00512";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
