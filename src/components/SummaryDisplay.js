import React from "react";
import "../style.css";
import { withWeather } from "../context/WeatherProvider";

function SummaryDisplay(props) {
  if (props.currently && props.daily) {
    return (
      <div className="display-container">
        <span className="h3">Current Summary</span>
          <div><hr/></div>
        <span>{props.currently.summary}</span>
          <div><hr/></div>
          <span> {Math.round(props.currently.temperature)}℉ </span>
          <div><hr/></div>
          <span>High: {props.daily.data[0].temperatureHigh}°F</span>
          <div><hr/></div>
        <span>Low: {props.daily.data[0].temperatureLow}°F</span>
          <div><hr/></div>
        <span>Feels Like: {props.currently.apparentTemperature}</span>
          <div><hr/></div>
      </div>
    );
  } else {
    return (
      <div>
        <h3>No Summary to display</h3>
      </div>
    );
  }
}

export default withWeather(SummaryDisplay);
