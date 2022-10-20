import React from "react";

export default function WeatherForecatsDay(props) {
  let date = new Date(props.value.time * 1000);

  function maxTemp() {
    let temp = Math.round(props.value.temperature.maximum);
    return `${temp}°`;
  }

  function minTemp() {
    let temp = Math.round(props.value.temperature.minimum);
    return `${temp}°`;
  }

  function day() {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];

    return days[date.getDay()];
  }

  function month() {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${date.getDate()} ${months[date.getMonth()]}`;
  }

  return (
    <div className="WeatherForecatsDay">
      <div className="row days">
        <div className="col-sm-7">
          <p className="day-title">{day()}</p>
          <p className="day-value">{month()}</p>
        </div>
        <div className="col-sm-5">
          <img
            src={props.value.condition.icon_url}
            alt={props.value.condition.description}
            className="prediction-img"
          />
          <p className="prediction-temp">
            {maxTemp()} <span className="temp-night"> {minTemp()}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
