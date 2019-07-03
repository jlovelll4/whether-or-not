import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import WeatherProvider from "./context/WeatherProvider";
import "./style.css";

ReactDOM.render(
  <BrowserRouter>
    <WeatherProvider>
      <App />
    </WeatherProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
