import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActionCable from "actioncable";

import Home from "./Home";
import Navbar from "./Navbar";

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
    videoClass: "video"
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
          commandList: data.command,
          commandKey: data.key,
          commandValue: data.value
        });
        switch (data.key) {
          case "on":
            this.setState({ on: data.value });
            break;
          case "youtube":
            data.value === "true"
              ? this.setState({ playing: true, volume: 1 })
              : this.setState({ playing: false });
            break;
          case "youtubeSize":
            this.setState({ videoClass: data.value });
            break;
          case "volume":
            this.setState({ muted: false, volume: 1 });
            break;
          default:
        }
      }
    });
    fetch(
      "https://bypasscors.herokuapp.com/api/?url=https://api.darksky.net/forecast/4812400e8cc5b9678e6a02e9b16c64fa/51.482647,-0.015522?units=uk2"
    )
      .then(resp => resp.json())
      .then(weather => this.setState({ weather }));
  }

  render() {
    return (
      <div className="main" id="main">
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
                    videoClass={this.state.videoClass}
                    url={this.state.url}
                    commandList={this.state.commandList}
                    commandKey={this.state.commandKey}
                    commandValue={this.state.commandValue}
                    weather={this.state.weather}
                    playing={this.state.playing}
                    muted={this.state.muted}
                    volume={this.state.volume}
                  />
                )}
              />
            )}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
