import React, { Component } from "react";
import WeatherDetailTiles from "./WeatherDetailTiles";

var synth = window.speechSynthesis;

class WeatherDetail extends Component {
  state = {};

  whatever = () => {};

  displayTiles = () => {
    if (this.props.weather.length === 0 || this.props.weather === undefined) {
      console.log("");
    } else {
      setTimeout(() => {
        this.speak(
          `The forecast for the next 7 days is: ${
            this.props.weather.daily.summary
          }`
        );
      }, 1000);
      return this.props.weather.daily.data.map(x => (
        <WeatherDetailTiles id={x.time} weather={x} />
      ));
    }
  };

  speak = text => {
    var msg = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(msg);
  };

  componentWillUnmount() {
    synth.cancel();
  }

  render() {
    return (
      <div className={this.props.forecastClass}
      onClick={ event => {this.props.closeWindow()}}
      >
        {/* <h1>Weather Detail</h1> */}

        {this.displayTiles()}
      </div>
    );
  }
}

export default WeatherDetail;
