import React, { Component } from "react";
import Tfl from "./Tfl";
import Google from "./Google";
import Video from "./Video";
import Weather from "./Weather";
import Calendar from "./Calendar";
import Quote from "./Quote";
import CommandList from "./CommandList";
import News from "./News";
import WeatherDetail from "./WeatherDetail";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Home extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className={this.props.cardsClass}>
        {this.props.weatherTiles === "true" && (
          <Weather weather={this.props.weather} />
        )}
        {this.props.forecast === "true" && (
          <WeatherDetail weather={this.props.weather} />
        )}
        {this.props.tfl === "true" && <Tfl />}
        <Video
          videoClass={this.props.videoClass}
          url={this.props.url}
          playing={this.props.playing}
          muted={this.props.muted}
          volume={this.props.volume}
        />
        {this.props.google === "true" && (
          <Google
            commandList={this.props.commandList}
            commandKey={this.props.commandKey}
            commandValue={this.props.commandValue}
          />
        )}
        {this.props.calendar === "true" && <Calendar />}

        {this.props.commands === "true" && <CommandList />}
        {this.props.news === "true" && <News />}
      </div>
    );
  }
}

export default Home;
