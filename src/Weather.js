import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import axios from "axios";

import Current from "./Current";
import Prediction from "./Prediction";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

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
      date: new Date(response.data.time * 1000),
    });
  }

  function search() {
    const apiKey = "474ot518db9444a6f4583f30efc00512";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="main-content col-sm-8">
            <div className="content-top">
              <form id="search-form" onSubmit={handleSubmit}>
                <input
                  type="search"
                  placeholder="Enter a city"
                  autoFocus="off"
                  autoComplete="off"
                  className="input"
                  id="input"
                  onChange={handleCityChange}
                />
                <input
                  type="submit"
                  value="Search"
                  className="search-button"
                  id="search-button"
                />
              </form>
              <Current data={weatherData} />
            </div>
          </div>
          <div className="prediction col-sm-4" id="forecast">
            <Prediction value={weatherData.city} />
          </div>
        </div>
      </div>
    );
  } else {
    search();

    return "Loading...";
  }
}
