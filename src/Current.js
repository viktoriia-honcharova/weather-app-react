import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Main from "./img/main-photo.JPEG";

import Humidity from "./Humidity";
import Wind from "./Wind";
import FormattedDate from "./FormattedDate";

export default function Current(props) {
  return (
    <div className="Current">
      <section className="weather-img">
        <img src={Main} alt="" className="background" />
        <div className="weather-data">
          <h2 className="city-name" id="city-name">
            {props.data.city}
          </h2>
          <p className="day-time">
            <FormattedDate value={props.data.date} />
          </p>
          <img
            src={props.data.iconUrl}
            alt={props.data.iconDesc}
            className="main-weather"
            id="currennt-weather-icon"
          />
          <h1 className="current-temp">
            <span id="current-temp">{props.data.temperature}</span>
            <span className="degree-singht"> °C</span>
          </h1>
        </div>
      </section>
      <div className="content-bottom">
        <div className="row bottom-row">
          <Humidity value={props.data.humidity} />
          <Wind value={props.data.wind} />
        </div>
      </div>
    </div>
  );
}
