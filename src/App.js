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
    url:
      "https://www.youtube.com/watch?v=W4brAobC2Hc&list=PL2agQcX85d2TCqH3Ptdax5QImZJwIt9TF&index=12&t=37s?autoplay=1",
    weather: [],
    commandList: [],
    commandValue: "",
    commandKey: "",
    on: "true",
    playing: false,
    muted: false,
    volume: 1,
    videoClass: "video",
    forecast: "false",
    weatherTiles: "true",
    tfl: "true",
    google: "true",
    calendar: "true",
    commands: "true",
    news: "false",
    cardsClass: "cards",
    forecastClass: "weatherDetail",
    stocks: "true",
    fullweather: "true",
    newsClass: "",
    email: "",
    emailAddress: ""
  };

  whatever = () => {};

  componentDidMount() {
    var cable = ActionCable.createConsumer(
      "wss://boiling-tundra-71042.herokuapp.com/cable"
    );

    cable.subscriptions.create("UpdateChannel", {
      received: data => {
        // console.log("update_channel received data", data.key);
        this.setState({
          commandlist: data.command,
          commandKey: data.key,
          commandValue: data.value
        });
        switch (data.key) {
          case "on":
            this.setState({ on: data.value });
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
                google: "true",
                calendar: "true",
                commands: "true",
                news: "true"
              });
            else {
              this.setState({
                cardsClass: "",
                videoClass: data.value,
                weatherTiles: "false",
                tfl: "false",
                google: "false",
                calendar: "false",
                commands: "false",
                news: "false"
              });
            }
            break;
          case "volume":
            this.setState({ muted: false, volume: 1 });
            break;
          case "forecast":
            if (data.value === "true") {
              this.setState({
                forecast: data.value,
                forecastClass: "weatherDetail",
                playing: false
              });
            } else {
              this.setState(
                {
                  forecastClass: "weatherDetailOut"
                },
                () =>
                  setTimeout(() => {
                    this.setState({ forecast: "false" });
                  }, 2000)
              );
            }
            break;
          case "news":
            if (data.value === "true") {
              this.setState({
                news: data.value,
                newsClass: "newsin",
                playing: false
              });
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
          case "close":
            this.setState(
              {
                forecastClass: "weatherDetailOut",
                newsClass: "newsout"
              },
              () =>
                setTimeout(() => {
                  this.setState({
                    forecast: "false",
                    news: "false"
                  });
                }, 2000)
            );
            break;
          case "email":
            this.setState({
              email: Math.floor(Math.random() * 1000),
              emailAddress: data.value
            });
            break;
          default:
        }
      }
    });
    fetch(
      "https://bypasscors.herokuapp.com/api/?url=https://api.darksky.net/forecast/4812400e8cc5b9678e6a02e9b16c64fa/51.482647,-0.015522?units=uk2"
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

  render() {
    return (
      <div className="main">
        {/* {console.log(this.state.weather)} */}
        <Navbar weather={this.state.weather} />
        <Router>
          <Switch>
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
