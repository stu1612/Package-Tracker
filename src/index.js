import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// npm
import { BrowserRouter } from "react-router-dom";
// utils
import "./utils/i18n";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
