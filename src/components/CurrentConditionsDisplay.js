// const Skycons = require('react-skycons');
import React from "react";
import Skycons from "react-skycons";

import { withWeather } from "../context/WeatherProvider";
import "../style.css";

class CurrentConditionsDisplay extends React.Component {
  render() {
    const icon = this.props.currently.icon.replace(/-/g, "_").toUpperCase();

    if (this.props.currently) {
      return (
        <div className="display-container scroll">
          <span className="h3">Current Conditions</span>
          {this.props.convertTime(this.props.currently.time, "HH:MM")}
          <div>
            <hr />
          </div>
          <Skycons
            style={{ height: "4em", width: "6em" }}
            color="white"
            icon={icon}
            autoplay={true}
          />
          {this.props.currently.summary}
          <div>
            <hr />
          </div>
          <span>
            {Math.round(this.props.currently.temperature)}℉ | {""}
            {Math.round(this.props.currently.apparentTemperature)}℉ (Feels Like)
          </span>
          <div>
            <hr />
          </div>
          Humidity: {Math.round(this.props.currently.humidity * 100)}%
          <div>
            <hr />
          </div>
          Precip: {this.props.currently.precipProbability * 100}%
          <div>
            <hr />
          </div>
          <span>
            {this.props.currently.windSpeed} mph |
            {this.props.convertBearing(this.props.currently.windBearing)} |
            {this.props.currently.windGust} mph (gust)
          </span>
          <div>
            <hr />
          </div>
          <span>Dew Pt: {Math.round(this.props.currently.dewPoint)}°</span>
          <div>
            <hr />
          </div>
          Pressure: {Math.round(this.props.currently.pressure)}mb
          <div>
            <hr />
          </div>
          UV Index: {this.props.currently.uvIndex}
          <div>
            <hr />
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h1>No data to display.</h1>
        </div>
      );
    }
  }
}
export default withWeather(CurrentConditionsDisplay);
