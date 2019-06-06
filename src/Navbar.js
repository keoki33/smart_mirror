import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";

class Navbar extends Component {
  state = { time: "" };

  whatever = () => {};

  componentDidMount() {
    this.timer = setInterval(() => this.showTime(), 1000);
  }

  showTime = () => {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    this.setState({ time: `${h + ":" + m + ":" + s}` });
  };

  render() {
    return (
      <div className="navbar">
        <div className="navWeather">
          <ReactAnimatedWeather icon="SNOW" color="white" size="64" />
        </div>
        <div className="clock">
          <h1>{this.state.time}</h1>
        </div>
      </div>
    );
  }
}

export default Navbar;
