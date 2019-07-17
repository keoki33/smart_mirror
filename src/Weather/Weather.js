import React, { Component } from "react";
import WeatherTiles from "./WeatherTiles";

class Weather extends Component {
  state = {};

  showHourly = () => {
    if (this.props.weather.length === 0 || this.props.weather === undefined) {
      console.log("");
    } else {
      let s = this.props.weather.hourly.data.slice(0, 24);
      let f = s.filter(function(v, i) {
        return i % 2 == 0;
      });
      return f.map(x => <WeatherTiles key={x.time} weather={x} />);
    }
  };

  render() {
    return (
      <div className={this.props.weatherClass}
      onClick={ event => {this.props.showForecast()}}
      >
        {/* <div className="line" /> */}
        {console.log()}
        <h3 className="weatherhead">Weather Forecast</h3>
        {this.showHourly()}
      </div>
    );
  }
}

export default Weather;
