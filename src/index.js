import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// let DATA = [
// gets passed to employees = data on 15 below
//   { id: "person-0", name: "Bob", jobTitle: "Manager", currentEmployee: true },
//   { id: "person-1", name: "Terry", jobTitle: "HR", currentEmployee: false },
//   { id: "person-2", name: "Sarah", jobTitle: "CEO", currentEmployee: false },
// ];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
