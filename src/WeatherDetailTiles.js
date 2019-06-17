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

  iconColor = () => {
    switch (this.props.weather.icon) {
      case "clear-day":
        return "#FFE600";
      case "clear-night":
        return "#606060";
      case "rain":
        return "#0039BE";
      case "snow":
        return "#0039BE";
      case "sleet":
        return "#0039BE";
      case "wind":
        return "#606060";
      case "fog":
        return "#606060";
      case "cloudy":
        return "#606060";
      case "partly-cloudy-day":
        return "#FFE600";
      case "partly-cloudy-night":
        return "#606060";
      default:
        return "#606060";
    }
  };

  render() {
    return (
      <div className="WeatherCards">
        <h1>{this.showDay()}</h1>
        <ReactAnimatedWeather
          icon={this.props.weather.icon.toUpperCase().replace(/-/g, "_")}
          color={this.iconColor()}
          size={80}
        />
        {this.props.weather.summary}
        <br />
        <br />
        <div className="weatherCardBottom">
          {/* Chance of rain: {this.props.weather.precipProbability} % */}
          <br />
          <br />
          Low: {this.props.weather.temperatureLow}
          <br />
          High {this.props.weather.temperatureHigh}
          <br />
          <br />
          Wind Speed: {this.props.weather.windSpeed} mph
          <br />
          Chance of rain:{" "}
          {this.props.weather.precipProbability.toFixed(1) * 100} %
        </div>
      </div>
    );
  }
}

export default WeatherDetailTiles;
