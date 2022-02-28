import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import CustomerService from "./service/customerService";

const customerService = new CustomerService();
ReactDOM.render(
  <React.StrictMode>
    <App customerService={customerService} />
  </React.StrictMode>,
  document.getElementById("root")
);
