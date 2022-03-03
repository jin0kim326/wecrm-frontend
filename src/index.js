import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import CustomerService from "./service/customerService";
import { Provider } from "react-redux";
import store from "./service/store";

const customerService = new CustomerService();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App customerService={customerService} />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
