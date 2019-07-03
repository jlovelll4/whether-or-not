import React from "react";
import { withWeather } from "../context/WeatherProvider";
import "../style.css";

function DailyForecast(props) {
  if (props.daily) {
    return (
      <div className="display-container">
        <span>
          Time: {props.daily.data[0].time}
          High: {props.daily.data[0].temperatureHigh}°F Low:{" "}
          {props.daily.data[0].temperatureLow}°F
        </span>
        <span>
          Icon: {props.daily.data[1].icon}
          Time: {props.daily.data[1].time}
          High: {props.daily.data[1].temperatureHigh}°F Low:{" "}
          {props.daily.data[1].temperatureLow}°F
        </span>

        <span>
          Icon: {props.daily.data[2].icon}
          Time: {props.daily.data[2].time}
          High: {props.daily.data[2].temperatureHigh}°F Low:{" "}
          {props.daily.data[2].temperatureLow}°F
        </span>

        <span>
          Icon: {props.daily.data[3].icon}
          Time: {props.daily.data[3].time}
          High: {props.daily.data[3].temperatureHigh}°F Low:{" "}
          {props.daily.data[3].temperatureLow}°F
        </span>

        <span>
          Icon: {props.daily.data[4].icon}
          Time: {props.daily.data[4].time}
          High: {props.daily.data[4].temperatureHigh}°F Low:{" "}
          {props.daily.data[4].temperatureLow}°F
        </span>

        <span>
          Icon: {props.daily.data[5].icon}
          Time: {props.daily.data[5].time}
          High: {props.daily.data[5].temperatureHigh}°F Low:{" "}
          {props.daily.data[5].temperatureLow}°F
        </span>

        <span>
          Icon: {props.daily.data[6].icon}
          Time: {props.daily.data[6].time}
          High: {props.daily.data[6].temperatureHigh}°F Low:{" "}
          {props.daily.data[6].temperatureLow}°F
        </span>
      </div>
    );
  } else {
    return <h3>Daily Display</h3>;
  }
}
export default withWeather(DailyForecast);
