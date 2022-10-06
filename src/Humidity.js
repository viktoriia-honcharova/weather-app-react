import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import HumidityIcon from "./img/humidity.svg";

export default function Humidity() {
  return (
    <div className="weather-indicators col-sm-6">
      <div className="row">
        <div className="col-sm-6">
          <img src={HumidityIcon} alt="" class="indicators-img" />
        </div>
        <div className="col-sm-6">
          <p className="indicators-title">Humidity</p>
          <p className="indicators-walue">
            <span id="humidity">95</span>%
          </p>
        </div>
      </div>
    </div>
  );
}
