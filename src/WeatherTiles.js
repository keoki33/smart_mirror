import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
  icon: "WIND",
  color: "white",
  size: 64,
  animate: true
};

class WeatherTiles extends Component {
  state = {};

  displayIcon = () => {
    return "WIND";
  };

  render() {
    return (
      <div className="card">
        {console.log()}
        <ReactAnimatedWeather
          icon={this.displayIcon()}
          color="white"
          size={64}
        />
        {this.props.weather.icon}
      </div>
    );
  }
}

export default WeatherTiles;
