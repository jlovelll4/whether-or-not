import { Router } from "@reach/router";
import React from "react";
import CurrentConditionsDisplay from "./CurrentConditionsDisplay";
import SummaryDisplay from "./SummaryDisplay";
import HourlyScroll from "./HourlyScroll";
import DailyForecast from "./DailyForecast";
import "../style.css";
import icons from "../shared/icons.js"
import { withWeather } from "../context/WeatherProvider";

function WeatherList(props) {
  if (props.currently) {
    return (
      <div>
        <Router>
          <SummaryDisplay path="CurrentSummary" />
          <HourlyScroll path="Hourly" />
          <DailyForecast path="Daily" />
          <CurrentConditionsDisplay
            path="CurrentConditions"
            render={rProps => <CurrentConditionsDisplay {...rProps} />}
          />
        </Router>
      </div>
    );
  } else {
    return <div></div>;
  }
}
export default withWeather(WeatherList);
