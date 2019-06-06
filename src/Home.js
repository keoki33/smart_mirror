import React, { Component } from "react";
import Tfl from "./Tfl";
import Google from "./Google";
import Youtube from "./Youtube";
import Weather from "./Weather";
import Calendar from "./Calendar";
import Quote from "./Quote";
// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="cards">
        <Weather weather={this.props.weather} />
        <Tfl />
        <Youtube />
        <Google
          commandKey={this.props.commandKey}
          commandValue={this.props.commandValue}
        />
        <Calendar />
        <Quote />
      </div>
    );
  }
}

export default Home;
