import React, { Component } from "react";
import Tfl from "./Tfl/Tfl.js";
import Google from "./Google";
import Video from "./Video";
import Weather from "./Weather/Weather";
import Calendar from "./Calendar/Calendar";

import CommandList from "./CommandList";
import News from "./News/News";
import Stocks from "./Stocks";
import Todo from "./Todo";
import WeatherDetail from "./Weather/WeatherDetail";
import FullCalendar from "./Calendar/FullCalendar";
import NewsFull from "./News/NewsFull";
import Camera from "./Camera";

class Home extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className={this.props.cardsClass}>
        {/* {this.props.news === "true" && <hr className="line" />} */}
        <Camera
          cameramuted={this.props.cameramuted}
          cameraplaying={this.props.cameraplaying}
          cameraClass={this.props.cameraClass}
        />
        {this.props.weatherTiles === "true" && (
          <Weather
            showForecast={this.props.showForecast}
            weatherClass={this.props.weatherClass}
            className="WeatherCards"
            weather={this.props.weather}
          />
        )}
        {this.props.forecast === "true" && (
          <WeatherDetail
            forecastClass={this.props.forecastClass}
            weather={this.props.weather}
            closeWindow={this.props.closeWindow}
          />
        )}
        {this.props.tfl === "true" && <Tfl tflClass={this.props.tflClass} />}

        {this.props.news === "true" && (
          <News newsClass={this.props.newsClass} />
        )}
        {this.props.newsFull === "true" && (
          <NewsFull
            sendEmail={this.props.sendEmail}
            newsFullClass={this.props.newsFullClass}
            email={this.props.email}
          />
        )}
        {/* {this.props.commands === "true" && <CommandList />} */}
        <Video
          videoClass={this.props.videoClass}
          url={this.props.url}
          playing={this.props.playing}
          muted={this.props.muted}
          volume={this.props.volume}
        />

        {this.props.calendar === "true" && (
          <Calendar calendarClass={this.props.calendarClass} />
        )}

        {this.props.google === "true" && (
          <Google
            commandList={this.props.commandList}
            commandKey={this.props.commandKey}
            commandValue={this.props.commandValue}
          />
        )}
        {this.props.calendar === "true" && (
          <Stocks stocksClass={this.props.stocksClass} />
        )}
        {this.props.calendarFull === "true" && (
          <FullCalendar
            calendarFullClass={this.props.calendarFullClass}
            calendarFullClassB={this.props.calendarFullClassB}
          />
        )}
        {/* <Google /> */}
      </div>
    );
  }
}

export default Home;
