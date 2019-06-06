import React, { Component } from "react";
import WeatherTiles from "./WeatherTiles";

class Weather extends Component {
  state = {};

  showHourly = () => {
    if (this.props.weather.length === 0 || this.props.weather === undefined) {
      console.log("");
    } else {
      return this.props.weather.hourly.data.map(x => (
        <WeatherTiles key={x.time} weather={x} />
      ));
    }
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
