import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const tablee = [
  { tên: " nguyễn văn a", lớp: "12A1", giớitính: "nam" },
  { tên: " nguyễn văn b", lớp: "12A1", giớitính: "nam" },
  { tên: " nguyễn văn c", lớp: "12A2", giớitính: "nữ" },
  { tên: " nguyễn văn d", lớp: "12A3", giớitính: "nữ" },
];
ReactDOM.render(
  <div>
    <h1>STUDENTS</h1>
    <table>
      <thead>
        <tr>
          <th>tên</th>
          <th>lớp</th>
          <th>giới tính</th>
        </tr>
      </thead>
      <tbody>
        {tablee.map((item) => (
          <tr>
            <td>{item.tên}</td>
            <td>{item.lớp}</td>
            <td>{item.giớitính}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>,
  document.getElementById("root")
);
reportWebVitals();
