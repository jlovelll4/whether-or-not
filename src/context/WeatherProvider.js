import React, { Component } from "react";
import axios from "axios/index";
import moment from "moment";
import momentTimezone from "moment-timezone"
export const WeatherContext = React.createContext();

class WeatherProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      forecast: []
    };
  }

  getCoords = (city, st8) => {
    console.log("getCoords is being reached");
    // Retrieve latitude and longitude from MapBox API based on user entered city, state.
    const mapBoxKey = process.env.REACT_APP_MAPBOX_API_KEY;
    const searchCity = city.trim().replace(" ", "%20");
    const searchState = st8.trim();
    const search = searchCity + "%20" + searchState;
    axios
      .get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?${mapBoxKey}`
      )
      .then(response => {
        this.setState(
          {
            city: city,
            st8: st8,
            longitude: response.data.features[0].center[0],
            latitude: response.data.features[0].center[1]
          },
          () => this.getWeather()
        );
      })
      .catch(err => console.log(err));
  };

  getWeather = () => {
    // Retrieve weather data from DarkSky API.
    const darkSkyKey = process.env.REACT_APP_DARKSKY_API_KEY;
    const vSchoolCors = "https://vschool-cors.herokuapp.com?url=";
    axios
      .get(
        `${vSchoolCors}https://api.darksky.net/forecast/${darkSkyKey}/${this.state.latitude},${this.state.longitude}?exclude=[minutely]`
      )
      .then(response => {
        console.log(response.data);

        this.setState({
          forecast: response.data
        });
      })
      .catch(err => console.log(err));
  };
  convertTime = (time, format) => {
    return moment(time * 1000)
      .tz(this.state.forecast.timezone)
      .format(format);
  };
  convertBearing = b => {
    // eslint-disable-next-line no-extend-native
    Number.prototype.between = function(first, last) {
      return first < last
        ? this >= first && this <= last
        : this >= last && this <= first;
    };
    let heading;
    switch (true) {
      case b.between(349, 360) || b.between(0, 11):
        heading = "N";
        break;
      case b.between(12, 34):
        heading = "NNE";
        break;
      case b.between(34, 56):
        heading = "NE";
        break;
      case b.between(56, 79):
        heading = "ENE";
        break;
      case b.between(79, 101):
        heading = "E";
        break;
      case b.between(102, 124):
        heading = "ESE";
        break;
      case b.between(125, 146):
        heading = "SE";
        break;
      case b.between(147, 169):
        heading = "SSE";
        break;
      case b.between(170, 191):
        heading = "S";
        break;
      case b.between(192, 214):
        heading = "SSW";
        break;
      case b.between(215, 236):
        heading = "SW";
        break;
      case b.between(237, 258):
        heading = "WSW";
        break;
      case b.between(259, 281):
        heading = "W";
        break;
      case b.between(282, 303):
        heading = "WNW";
        break;
      case b.between(304, 325):
        heading = "NW";
        break;
      case b.between(326, 348):
        heading = "NNW";
        break;
      default:
        heading = `${b} doesn't fall within range options.`;
    }
    return heading;
  };
  render() {
    return (
      <WeatherContext.Provider
        value={{
          getCoords: this.getCoords,
          convertTime: this.convertTime,
          convertBearing: this.convertBearing,
          st8: this.state.st8,
          city: this.state.city,
          currently: this.state.forecast.currently,
          forecast: this.state.forecast,
          hourly: this.state.forecast.hourly,
          daily: this.state.forecast.daily,
          alerts: this.state.forecast.alerts,
          flags: this.state.forecast.flags
        }}
      >
        {this.props.children}
      </WeatherContext.Provider>
    );
  }
}

export default WeatherProvider;
export const withWeather = C => props => (
  <WeatherContext.Consumer>
    {value => <C {...value} {...props} />}
  </WeatherContext.Consumer>
);
