import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

export default function Prediction() {
  return (
    <div className="row days">
      <div className="col-sm-7">
        <p className="day-title">Saturday</p>
        <p className="day-value">17 October</p>
      </div>
      <div className="col-sm-5">
        <img
          src="http://openweathermap.org/img/wn/10d@2x.png"
          alt=""
          className="prediction-img"
        />
        <p className="prediction-temp">
          11° <span className="temp-night"> 18°</span>
        </p>
      </div>
    </div>
  );
}
