import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import WindIcon from "./img/wind.svg";

export default function Wind(props) {
  return (
    <div className="weather-indicators col-sm-6">
      <div className="row">
        <div className="col-sm-6">
          <img src={WindIcon} alt="" className="indicators-img" />
        </div>
        <div className="col-sm-6">
          <p className="indicators-title">Wind</p>
          <p className="indicators-walue">
            <span id="humidity">{props.value}</span>km/h
          </p>
        </div>
      </div>
    </div>
  );
}
