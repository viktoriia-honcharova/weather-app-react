import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Form from "./Form";
import Current from "./Current";
import Humidity from "./Humidity";
import Wind from "./Wind";
import Prediction from "./Prediction";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container main">
      <div className="row">
        <div className="main-content col-sm-8">
          <div className="content-top">
            <Form />
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
      <div class="open-source">
        <a
          href="https://github.com/viktoriia-honcharova/weather-app-react"
          target="_blank"
          class="open-source-link"
        >
          Open-source code
        </a>{" "}
        by Viktoriia Honcharova
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
