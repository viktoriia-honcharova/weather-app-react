import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Main from "./img/main-photo.JPEG";
import axios from "axios";

export default function Current() {
  const apiKey = "7b520c6d96772777c0b1b903686b2ce1";
  //let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  return (
    <section className="weather-img">
      <img src={Main} alt="" className="background" />
      <div className="weather-data">
        <h2 className="city-name" id="city-name">
          Rivne
        </h2>
        <p className="day-time">Friday, 21:00</p>
        <img
          src="http://openweathermap.org/img/wn/02n@2x.png"
          alt=""
          className="main-weather"
          id="currennt-weather-icon"
        />
        <h1 className="current-temp">
          <span id="current-temp">14</span>
          <span className="degree-singht"> °C</span>
        </h1>
      </div>
    </section>
  );
}
