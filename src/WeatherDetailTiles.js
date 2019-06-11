import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";

class WeatherDetailTiles extends Component {
  state = {};

  showDay = () => {
    var dt = new Date(this.props.weather.time * 1000);
    var d = dt.getDay();
    switch (d) {
      case 0:
        return "Sunday";
      case 1:
        return "Monday";
      case 2:
        return "Tuesday";
      case 3:
        return "Wednesday";
      case 4:
        return "Thursday";
      case 5:
        return "Friday";
      case 6:
        return "Saturday";
      default:
        console.log("");
    }
  };

  render() {
    return (
      <div className="WeatherCards">
        <h1>{this.showDay()}</h1>
        <ReactAnimatedWeather
          icon={this.props.weather.icon.toUpperCase().replace(/-/g, "_")}
          color="black"
          size={80}
        />
        {this.props.weather.summary}
        <br />
        <br />
        <div className="weatherCardBottom">
          Chance of rain: {this.props.weather.precipProbability} %
          <br />
          <br />
          Low: {this.props.weather.temperatureLow}
          <br />
          High {this.props.weather.temperatureHigh}
          <br />
          <br />
          Wind Speed:{this.props.weather.windSpeed}
          <br />
          Chance of rain:{this.props.weather.precipProbability}
        </div>
      </div>
    );
  }
}

export default WeatherDetailTiles;
