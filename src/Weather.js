import React, { Component } from "react";
import WeatherTiles from "./WeatherTiles";

class Weather extends Component {
  state = {};

  showHourly = () => {
    this.props.weather.length === 0 || this.props.weather === undefined
      ? console.log("empty")
      : console.log(this.props.weather.currently.icon);
    // return this.props.weather["hourly"].map(x => <WeatherTiles weather={x} />);
  };

  render() {
    return (
      <div className="card">
        {console.log()}
        {this.showHourly()}
      </div>
    );
  }
}

export default Weather;
