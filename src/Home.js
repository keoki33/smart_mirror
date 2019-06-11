import React, { Component } from "react";
import Tfl from "./Tfl";
import Google from "./Google";
import Video from "./Video";
import Weather from "./Weather";
import Calendar from "./Calendar";

import CommandList from "./CommandList";
import News from "./News";
import Stocks from "./Stocks";
import WeatherDetail from "./WeatherDetail";

class Home extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className={this.props.cardsClass}>
        {this.props.weatherTiles === "true" && (
          <Weather className="WeatherCards" weather={this.props.weather} />
        )}
        {this.props.forecast === "true" && (
          <WeatherDetail
            forecastClass={this.props.forecastClass}
            weather={this.props.weather}
          />
        )}
        {this.props.tfl === "true" && <Tfl />}
        {this.props.news === "true" && <News />}
        {this.props.commands === "true" && <CommandList />}
        <Video
          videoClass={this.props.videoClass}
          url={this.props.url}
          playing={this.props.playing}
          muted={this.props.muted}
          volume={this.props.volume}
        />

        {this.props.calendar === "true" && <Calendar />}

        {this.props.google === "true" && (
          <Google
            commandList={this.props.commandList}
            commandKey={this.props.commandKey}
            commandValue={this.props.commandValue}
          />
        )}
      </div>
    );
  }
}

export default Home;
