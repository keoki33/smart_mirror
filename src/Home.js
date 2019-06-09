import React, { Component } from "react";
import Tfl from "./Tfl";
import Google from "./Google";
import Video from "./Video";
import Weather from "./Weather";
import Calendar from "./Calendar";
import Quote from "./Quote";
import CommandList from "./CommandList";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="cards">
        <Weather weather={this.props.weather} />
        <Tfl />
        <Video
          videoClass={this.props.videoClass}
          url={this.props.url}
          playing={this.props.playing}
          muted={this.props.muted}
          volume={this.props.volume}
        />
        <Google
          commandList={this.props.commandList}
          commandKey={this.props.commandKey}
          commandValue={this.props.commandValue}
        />
        <Calendar />
        <Quote />
        <CommandList />
      </div>
    );
  }
}

export default Home;
