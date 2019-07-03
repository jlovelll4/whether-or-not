import React from "react";
import { withWeather } from "../context/WeatherProvider";
import "../style.css";

class LocationForm extends React.Component {
  constructor() {
    super();
    this.state = {
      city: "Pinson",
      st8: "AL"
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getCoords(this.state.city, this.state.st8);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit} id="form">
          <input
            placeholder="City"
            defaultValue="Pinson"
            name="city"
            onChange={this.onChange}
            type="text"
          />
          <input
            placeholder="State"
            name="st8"
            defaultValue="AL"
            onChange={this.onChange}
            type="text"
          />
          <button className="button">Get Weather</button>
        </form>
      </div>
    );
  }
}
export default withWeather(LocationForm);
