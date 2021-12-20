import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <div className="container d-flex align-items-center text-center">
    <div className="form-signin">
      <form>
        <div className="anh11">
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
            alt=""
            width="90"
            height="57"
          />
        </div>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
        <div className="form-floating">
          <input
            type="email"
            className="form-control email"
            id="floatingInput"
            placeholder="name@example.com"
          />
          <label>Email</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control password"
            id="floatingPassword"
            placeholder="Password"
          />
          <label>Password</label>
        </div>
        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <br></br>
          <br></br>
        </div>
        <button className="w-100 bg-primary text-white" type="submit">
          Sign in
        </button>
        <br></br>
        <p className="mt-5 mb-3 text-muted">khóa 2021-2024</p>
      </form>
    </div>
  </div>,
  document.getElementById("root")
);
reportWebVitals();
