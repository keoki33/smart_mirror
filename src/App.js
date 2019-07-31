import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActionCable from "actioncable";

import Home from "./Home";
import Navbar from "./Navbar";
import Quote from "./Quote";
import Stocks from "./Stocks";

var synth = window.speechSynthesis;

class App extends Component {
  state = {
    urlIndex: 0,
    urlList: [
      "https://www.youtube.com/watch?v=W4brAobC2Hc",
      "https://www.youtube.com/watch?v=hbfl4Rhsm3w",
      "https://www.youtube.com/watch?v=2Vv-BfVoq4g",
      "https://www.youtube.com/watch?v=SppAPQChkzI&t=96s?autoplay=1",
      "https://www.youtube.com/watch?v=jeGT1VXwfx4",
      "https://www.youtube.com/watch?v=Ftm2uv7-Ybw",
      "https://www.youtube.com/watch?v=mWyak0g5LLI&t=200s",
      "https://www.youtube.com/watch?v=z9DJn5EMtZQ",
      "https://www.youtube.com/watch?v=g-ol9_wyx-o",
      "https://www.youtube.com/watch?v=r8cexmYOknI&t=10s",
      "https://www.youtube.com/watch?v=H28TWyDJJ6I&t=5s",
      "https://www.youtube.com/watch?v=8XJ6r4U171I",
      "https://www.youtube.com/watch?v=Qrj-p3mSOh0"
    ],
    url: "https://www.youtube.com/watch?v=lD2LfoCV4AI",
    weather: [],
    commandList: [],
    commandValue: "",
    commandKey: "",
    on: "true",
    cameraClass: "cameraoff",
    cameraplaying: "false",
    cameramuted: true,

    playing: false,
    muted: false,
    volume: 1,

    cardsClass: "cards",
    forecastClass: "weatherDetail",
    newsFullClass: "newsfullin",
    calendarFullClass: "fullcalendarin",
    calendarFullClassB: "fullcalendarinb",
    tflClass: "tube",
    weatherClass: "weather",
    calendarClass: "calendar",
    stocksClass: "stocks",
    videoClass: "video",
    newsClass: "news",

    newsFull: "false",
    forecast: "false",
    weatherTiles: "true",
    tfl: "true",
    google: "false",
    calendar: "true",
    commands: "true",
    news: "true",
    stocks: "true",
    fullweather: "true",
    calendarFull: "false",

    email: "",
    emailAddress: ""
  };

  nextVideo = () => {
    if (this.state.urlIndex == this.state.urlList.length - 1) {
      this.setState({ urlIndex: 0 }, () =>
        this.setState({
          url: this.state.urlList[this.state.urlIndex],
          playing: true
        })
      );
    } else {
      this.setState(
        {
          urlIndex: this.state.urlIndex + 1
          // muted: false,
          // volume: 1,
        },
        () =>
          this.setState({
            url: this.state.urlList[this.state.urlIndex],
            playing: true
          })
      );
    }
  };

  previousVideo = () => {
    if (this.state.urlIndex == 0) {
      this.setState({ urlIndex: this.state.urlList.length - 1 });
    } else {
      this.setState(
        {
          urlIndex: this.state.urlIndex - 1
        },
        () =>
          this.setState({
            url: this.state.urlList[this.state.urlIndex]
            // muted: false,
            // volume: 1
          })
      );
    }
  };

  componentDidMount() {
    alert(
      "Hello and welcome to my mirror. 1. Click on Flatiron Icon and 2. Play then pause Youtube Video. Needs to be done on first load or if you refresh the screen to allow controls to work. Use remote control website to control. All commands take 1-2 seconds to take effect. Thank you for trying my site"
    );
    var cable = ActionCable.createConsumer(
      "wss://boiling-tundra-71042.herokuapp.com/cable"
    );

    cable.subscriptions.create("UpdateChannel", {
      received: data => {
        console.log("update_channel received data", data.command);
        this.setState({
          commandlist: data.command,
          commandKey: data.key,
          commandValue: data.value
        });
        switch (data.key) {
          case "on":
            if (data.value === "true")
              this.setState({
                tflClass: "tube",
                weatherClass: "weather",
                calendarClass: "calendar",
                stocksClass: "stocks",
                videoClass: "video",
                newsClass: "news"
              });
            else {
              this.closeWindow();
              this.setState({
                tflClass: "tube blank",
                weatherClass: "weather blank",
                calendarClass: "calendar blank",
                stocksClass: "stocks blank",
                videoClass: "video blank",
                newsClass: "news blank"
              });
            }
            break;
          case "youtube":
            data.value === "true"
              ? this.setState({ playing: true })
              : this.setState({ playing: false });
            break;
          case "youtubeSize":
            if (data.value === "video")
              this.setState({
                cardsClass: "cards",
                videoClass: data.value,
                weatherTiles: "true",
                tfl: "true",
                google: "false",
                calendar: "true",
                commands: "false",
                news: "false"
              });
            else {
              this.closeWindow();
              setTimeout(() => {
                this.setState({
                  cardsClass: "",
                  videoClass: data.value,
                  weatherTiles: "false",
                  tfl: "false",
                  google: "false",
                  calendar: "false",
                  commands: "false",
                  news: "false",
                  stocks: "false",
                  forecast: "false"
                });
              }, 1000);
            }
            break;
          case "volume":
            data.value === "true"
              ? this.setState({ muted: true, volume: 0 })
              : this.setState({
                  muted: false,
                  volume: 1
                });
            break;
          case "forecast":
            if (data.value === "true") {
              this.showForecast();
            } else {
              this.setState(
                {
                  forecastClass: "weatherDetailOut"
                },
                () =>
                  setTimeout(() => {
                    this.setState({ forecast: "false" });
                  }, 1000)
              );
            }
            break;
          case "news":
            if (data.value === "true") {
              this.closeWindow();
              setTimeout(() => {
                this.setState({
                  newsFull: data.value,
                  newsFullClass: "newsfullin",
                  tflClass: "tube clear",
                  weatherClass: "weather clear",
                  calendarClass: "calendar clear",
                  stocksClass: "stocks clear",
                  videoClass: "video clear",
                  newsClass: "news clear",
                  playing: false
                });
              }, 1000);
            } else {
              this.setState(
                {
                  newsClass: "newsout"
                },
                () =>
                  setTimeout(() => {
                    this.setState({ news: "false" });
                  }, 2000)
              );
            }
            break;
          case "calendar":
            this.closeWindow();
            setTimeout(() => {
              this.setState({
                calendarFull: "true",
                calendarFullClass: "fullcalendarin",
                calendarFullClassB: "fullcalendarinb",

                tflClass: "tube clear",
                weatherClass: "weather clear",
                calendarClass: "calendar clear",
                stocksClass: "stocks clear",
                videoClass: "video clear",
                newsClass: "news clear"
              });
            }, 1000);
            break;
          case "close":
            this.closeWindow();
            break;
          case "email":
            this.setState({
              email: Math.floor(Math.random() * 1000),
              emailAddress: data.value
            });
            break;
          case "videoone":
            this.previousVideo();
            break;
          case "videotwo":
            this.nextVideo();
            break;
          case "cameraon":
            this.setState({
              cameraClass: "camera",
              cameraplaying: true,
              cameramuted: false,
              playing: false,

              tflClass: "tube clear",
              weatherClass: "weather clear",
              calendarClass: "calendar clear",
              stocksClass: "stocks clear",
              videoClass: "video clear",
              newsClass: "news clear"
            });
            break;
          case "cameraoff":
            this.closeWindow();
            break;
          default:
        }
      }
    });
    fetch(
      // "https://bypasscors.herokuapp.com/api/?url=https://api.darksky.net/forecast/4812400e8cc5b9678e6a02e9b16c64fa/51.482647,-0.015522?units=uk2"
      "https://keo-proxy.herokuapp.com/https://api.darksky.net/forecast/4812400e8cc5b9678e6a02e9b16c64fa/51.482647,-0.015522?units=uk2"
    )
      .then(resp => resp.json())
      .then(x => this.setState({ weather: x }));
  }

  sendEmail = (url, imageurl, headline) => {
    fetch("https://boiling-tundra-71042.herokuapp.com/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        url: url,
        email: this.state.emailAddress,
        imageurl: imageurl,
        headline: headline
      })
    });
  };

  closeWindow = () => {
    this.setState(
      {
        cardsClass: "cards",
        newsClass: "news",
        tflClass: "tube",
        weatherClass: "weather",
        calendarClass: "calendar",
        stocksClass: "stocks",
        videoClass: "video",
        forecastClass: "weatherDetailOut",
        newsFullClass: "newsfullout",
        calendarFullClass: "fullcalendarout",
        calendarFullClassB: "fullcalendaroutb",
        tfl: "true",
        stocks: "true",
        weatherTiles: "true",
        calendar: "true",
        news: "true",

        cameraClass: "cameraoff",
        cameraplaying: false,
        cameramuted: true
      },
      () =>
        setTimeout(() => {
          this.setState({
            forecast: "false",
            newsFull: "false",
            calendarFull: "false"
          });
        }, 1000)
    );
  };

  showForecast = () => {
    this.closeWindow();
    setTimeout(() => {
      this.setState({
        forecast: "true",
        forecastClass: "weatherDetail",
        tflClass: "tube clear",
        weatherClass: "weather clear",
        calendarClass: "calendar clear",
        stocksClass: "stocks clear",
        videoClass: "video clear",
        newsClass: "news clear",
        playing: false
      });
    }, 1100);
  };

  render() {
    return (
      <div className="main">
        {/* {console.log(this.state.weather)} */}
        <Navbar weather={this.state.weather} />
        <Router>
          <Switch>
            {/* <Sound url={require(`./audio/rocky.mp3`)} playStatus="PLAYING" /> */}
            {this.state.on === "true" && (
              <Route
                exact
                path={["/", "smart_mirror"]}
                render={props => (
                  <Home
                    {...props}
                    forecast={this.state.forecast}
                    videoClass={this.state.videoClass}
                    url={this.state.url}
                    commandList={this.state.commandList}
                    commandKey={this.state.commandKey}
                    commandValue={this.state.commandValue}
                    weather={this.state.weather}
                    playing={this.state.playing}
                    muted={this.state.muted}
                    volume={this.state.volume}
                    weatherTiles={this.state.weatherTiles}
                    tfl={this.state.tfl}
                    google={this.state.google}
                    calendar={this.state.calendar}
                    commands={this.state.commands}
                    news={this.state.news}
                    cardsClass={this.state.cardsClass}
                    forecastClass={this.state.forecastClass}
                    newsClass={this.state.newsClass}
                    sendEmail={this.sendEmail}
                    email={this.state.email}
                    weatherClass={this.state.weatherClass}
                    tflClass={this.state.tflClass}
                    calendarClass={this.state.calendarClass}
                    stocksClass={this.state.stocksClass}
                    newsFull={this.state.newsFull}
                    newsFullClass={this.state.newsFullClass}
                    calendarFull={this.state.calendarFull}
                    calendarFullClass={this.state.calendarFullClass}
                    calendarFullClassB={this.state.calendarFullClassB}
                    cameraClass={this.state.cameraClass}
                    cameraplaying={this.state.cameraplaying}
                    cameramuted={this.state.cameramuted}
                    showForecast={this.showForecast}
                    closeWindow={this.closeWindow}
                  />
                )}
              />
            )}
          </Switch>
        </Router>

        <Quote />
      </div>
    );
  }
}

export default App;
