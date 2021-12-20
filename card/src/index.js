import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
  <div className="container">
    <div className="card">
      <div className="card--header" />
      <img className="avatar" src="./anhbay.PNG" alt="avatar" />
      <div className="card--body">
        <div>
          <p className="text-header">Nguyễn Quang Hiếu</p>
          <p className="text-sub">Xóm Trung Xá - Xuân Lộc</p>
          <button className="btn">
            {" "}
            <a href="https://www.facebook.com/hieutrinh2k2"> FOLLOW</a>
          </button>
        </div>
      </div>
    </div>
  </div>,
  document.getElementById("root")
);
reportWebVitals();
