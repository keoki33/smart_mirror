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

  showIcon = () => {
    return this.props.weather.icon.toUpperCase().replace(/-/g, "_");
  };

  showTime = () => {
    var dt = new Date(this.props.weather.time * 1000);
    var hr = dt.getHours() + 1;
    var m = "0" + dt.getMinutes();
    var s = "0" + dt.getSeconds();
    return hr + ":" + m.substr(-2);
  };

  iconColor = () => {
    if (this.props.weather.length !== 0 && this.props.weather !== undefined) {
      switch (this.props.weather.icon) {
        case "clear-day":
          return "#FFE600";
        case "clear-night":
          return "white";
        case "rain":
          return "#0039BE";
        case "snow":
          return "#0039BE";
        case "sleet":
          return "#0039BE";
        case "wind":
          return "white";
        case "fog":
          return "white";
        case "cloudy":
          return "white";
        case "partly-cloudy-day":
          return "#FFE600";
        case "partly-cloudy-night":
          return "white";
        default:
          return "white";
      }
    } else {
      return "white";
    }
  };

  render() {
    return (
      <div class="weatherTable">
        <div class="tw1">
          <ReactAnimatedWeather
            icon={this.showIcon()}
            color={this.iconColor()}
            size={21}      
          />
        </div>
        <div class="tw2">{this.showTime()}</div>
        <div class="tw3">{this.props.weather.summary}:</div>
        <div class="tw4">
          {this.props.weather.temperature.toFixed(1)} {"C"}
        </div>
      </div>
    );
  }
}

export default WeatherTiles;
