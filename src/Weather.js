import React, { Component } from "react";
import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
  icon: "WIND",
  color: "white",
  size: 64,
  animate: true
};

class Weather extends Component {
  state = {};

  test = () => {
    return [1, 2, 3, 4, 5].map(x => x);
  };

  render() {
    return (
      <div className="card">
        {console.log()}
        <ReactAnimatedWeather
          icon={defaults.icon}
          color={defaults.color}
          size={64}
          animate={defaults.animate}
        />
        {this.test()}
      </div>
    );
  }
}

export default Weather;
