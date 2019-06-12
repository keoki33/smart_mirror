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

  render() {
    return (
      <div className="divTable">
        <div class="divTableBody">
          <div class="divTableRow">
            <div class="divTableCell">
              <ReactAnimatedWeather
                icon={this.showIcon()}
                color="white"
                size={20}
              />
            </div>
            <div class="divTableCell">{this.showTime()}</div>
            <div class="divTableCell">{this.props.weather.summary}:</div>
            <div class="divTableCell">
              {this.props.weather.temperature.toFixed(1)} {"C"}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default WeatherTiles;
