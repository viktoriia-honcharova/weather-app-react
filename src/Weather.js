import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

import Current from "./Current";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Prediction from "./Prediction";

export default function Weather() {
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
            <Current />
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
}
