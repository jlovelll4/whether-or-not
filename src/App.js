import React from "react";
import "./style.css";
import { Switch } from "react-router-dom";
import { Router } from "@reach/router";
import LocationForm from "./components/LocationForm";
import Header from "./components/Header";
import cloud from "./files/clouds.webm";
import Footer from "./components/Footer";
import WeatherList from "./components/WeatherList";
import { withWeather } from "./context/WeatherProvider";
import Navbar from "./components/Navbar";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="main-container">
        <video playsInline autoPlay muted loop>
          <source src={cloud} type="video/webm" />
        </video>
        <Header />
        <Navbar />
        <Switch>
            <Router>
              <WeatherList
                path="/"
                render={routerProps => <WeatherList {...routerProps} />}
              />

          </Router>
        </Switch>
        <LocationForm />
        <Footer />
      </div>
    );
  }
}
export default withWeather(App);
