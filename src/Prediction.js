import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import axios from "axios";
import WeatherForecatsDay from "./WeatherForecastDay";

export default function Prediction(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.value]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div>
        {forecast.map(function (dailyForecast, index) {
          if (index < 5) {
            return <WeatherForecatsDay value={dailyForecast} key={index} />;
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    const apiKey = "474ot518db9444a6f4583f30efc00512";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${props.value}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
