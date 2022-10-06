import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import Form from "./Form";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container main">
      <div className="row">
        <div className="main-content col-sm-8">
          <div className="content-top">
            <Form />
          </div>
          <div className="content-bottom">
            <div className="row bottom-row"></div>
          </div>
        </div>
        <div className="prediction col-sm-4" id="forecast"></div>
      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
