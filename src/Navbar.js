import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";
import Clock from "react-live-clock";

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
    return `
    ${this.props.weather.currently.summary} \n\n
    Current: ${this.props.weather.currently.temperature.toFixed(1)} C \n
    Low: ${this.props.weather.daily.data[0].temperatureLow.toFixed(1)} C \n
    High: ${this.props.weather.daily.data[0].temperatureHigh.toFixed(1)} C \n\
      
     
      Wind: ${this.props.weather.currently.windSpeed} mph \n\n
      Chance of \n\n rain: \n
       ${this.props.weather.currently.windSpeed}%
      `;
  };

  speak = () => {
    var msg = new SpeechSynthesisUtterance(`I see ${this.state.test}`);

    speechSynthesis.speak(msg);
  };

  componentW;

  render() {
    return (
      <div
        className="navbar"
        onClick={event => {
          this.speak();
        }}
      >
        <div className="navWeather">
          <ReactAnimatedWeather
            icon={this.showIcon()}
            color="white"
            size={80}
          />
          <br />
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
            format={"MMMM Do hh:mm:ss A"}
            timezone={"Europe/London"}
          />
        </div>
      </div>
    );
  }
}

export default Navbar;
