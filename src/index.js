import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container main">
      <Weather defaultCity="Kyiv" />
      <div className="open-source">
        <a
          href="https://github.com/viktoriia-honcharova/weather-app-react"
          target="_blank"
          rel="noreferrer"
          className="open-source-link"
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
