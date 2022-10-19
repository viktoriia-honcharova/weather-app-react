import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import HumidityIcon from "./img/humidity.svg";

export default function Humidity(props) {
  return (
    <div className="weather-indicators col-sm-6">
      <div className="row">
        <div className="col-sm-6">
          <img src={HumidityIcon} alt="" className="indicators-img" />
        </div>
        <div className="col-sm-6">
          <p className="indicators-title">Humidity</p>
          <p className="indicators-walue">
            <span id="humidity">{props.value}</span>%
          </p>
        </div>
      </div>
    </div>
  );
}
