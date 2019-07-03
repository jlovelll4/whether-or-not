import React from "react";
import { withWeather } from "../context/WeatherProvider";
// import moment from "moment";
// import momentTimezone from "moment-timezone"
import "../style.css";
import { comments } from "../files/conditionalComments.json";

function Header(props) {
  if (props.currently && props.city && props.st8) {
    // const format = "MMMM Do YYYY, HH:MM:SS";
    // const timeStamp = moment.unix(props.currently.time).format(format)
    // const convertTime = moment(props.currently.time * 1000)
    //   .tz(props.forecast.timezone)
    //   .format(format);
    return (
      <div className="header">
        <span>
          Last Updated: {props.convertTime(props.currently.time, "HH:MM:SS" )}
          {props.forecast.timezone}
        </span>
        <span>
          {props.city}, {props.st8}
        </span>
      </div>
    );
  } else {
    const randNum = Math.floor(Math.random() * comments.length);
    const randComment = comments[randNum];
    return (
      <div className="header">
        <h3>{randComment}.</h3>
      </div>
    );
  }
}

export default withWeather(Header);
