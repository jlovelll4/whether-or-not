import React from "react";
import "../style.css";
import { withWeather } from "../context/WeatherProvider";
import Skycons from "react-skycons";

function HourlyScroll(props) {
  const icon = props.currently.icon.replace(/-/g, "_").toUpperCase();

  if (props.hourly) {
    return (
      <div className="display-container scroll">
        {props.hourly.data.map(h => (
          <div className="hourly-data">
            <span>
              <Skycons
                style={{ height: "4em", width: "6em" }}
                color="white"
                icon={icon}
                autoplay={true}
              />
              <span>{props.convertTime(h.time, "M/D HH:MM")} </span>
              <span>{Math.round(h.temperature)}℉ </span>
              <div>
                <hr />
              </div>
            </span>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="display-container">
      <h3>no hourly data to display.</h3>
    </div>
  );
}
export default withWeather(HourlyScroll);
