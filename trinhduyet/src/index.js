import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <h4>Browser's details: {navigator.userAgent}</h4>,
  document.getElementById("root")
);
reportWebVitals();
