import React, { Component } from "react";
import WeatherDetailTiles from "./WeatherDetailTiles";

class WeatherDetail extends Component {
  state = {};

  whatever = () => {};

  displayTiles = () => {
    if (this.props.weather.length === 0 || this.props.weather === undefined) {
      console.log("");
    } else {
      return this.props.weather.daily.data.map(x => (
        <WeatherDetailTiles id={x.time} weather={x} />
      ));
    }
  };

  render() {
    return (
      <div className={this.props.forecastClass}>
        {/* <h1>Weather Detail</h1> */}
        {this.displayTiles()}
      </div>
    );
  }
}

export default WeatherDetail;
