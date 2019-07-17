import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Clock from "react-live-clock";
import Stocks from "./Stocks";

class Navbar extends Component {
  state = { time: "", test: "this is a test" };

  whatever = () => {};

  componentDidMount() {
    // this.timer = setInterval(() => this.showTime(), 1000);
  }

  // showTime = () => {
  //   let date = new Date();
  //   let h = date.getHours();
  //   let m = date.getMinutes();
  //   let s = date.getSeconds();
  //   this.setState({ time: `${h + ":" + m + ":" + s}` });
  // };

  showIcon = () => {
    return this.props.weather.length === 0 || this.props.weather === undefined
      ? "FOG"
      : this.props.weather.currently.icon.toUpperCase().replace(/-/g, "_");
  };

  displayWeather = () => {
    console.log(this.props.weather.currently);
    return `
     ${this.props.weather.currently.temperature.toFixed(1)} C \n
     ${this.props.weather.currently.summary} \n\n\n
    Low: ${this.props.weather.daily.data[0].temperatureLow.toFixed(1)} C \n
    High: ${this.props.weather.daily.data[0].temperatureHigh.toFixed(
      1
    )} C \n\n\n
      Wind: \n\n ${this.props.weather.currently.windSpeed} mph \n\n
      Chance of \n rain: \n
       ${this.props.weather.currently.precipProbability.toFixed(1) * 100} %
      `;
  };

  speak = text => {
    var msg = new SpeechSynthesisUtterance(`${this.props.weather.currently.summary}`);
    speechSynthesis.speak(msg);
  };

  iconColor = () => {
    if (this.props.weather.length !== 0 && this.props.weather !== undefined) {
      switch (this.props.weather.currently.icon) {
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

  // playSound = () => {
  //   let laser = new Audio();
  //   laser.src = `{require(./audio/rocky.mp3)}`;

  //   laser
  //     .play()
  //     .then(result => {
  //       console.log(result);
  //     })
  //     .catch(err => {});
  // };

  render() {
    return (
      <div
        className="navbar"
        onClick={event => {
          this.speak();
          // this.playSound();
        }}
      >
        <div className="navWeather">
          <div className="logowrap">
            <img
              className="flat"
              src={require(`./images/flat.gif`)}
              alt=""
              width="100"
              height="55"
            />
          </div>
          <br />

          <ReactAnimatedWeather
            icon={this.showIcon()}
            color={this.iconColor()}
            size={80}
          />

          <br />
          {this.props.weather.length !== 0 && this.displayWeather()}
        </div>

        <div className="clock">
          <Clock
            className="clock"
            timezone={"Europe/London"}
            format={"dddd"}
            date={""}
          />
          <br />
          <Clock
            ticking={true}
            className="clock"
            format={"Do MMMM hh:mm  A"}
            timezone={"Europe/London"}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
