import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActionCable from "actioncable";

import Home from "./Home";
import Navbar from "./Navbar";

class App extends Component {
  state = {
    weather: [],
    commandList: [],
    commandValue: "",
    commandKey: "",
    on: "true",
    video: "pause"
  };

  whatever = () => {};

  componentDidMount() {
    var cable = ActionCable.createConsumer("wss://d1e9d14c.eu.ngrok.io/cable");

    cable.subscriptions.create("UpdateChannel", {
      received: data => {
        // console.log("update_channel received data", data.key);
        this.setState({ commandKey: data.key, commandValue: data.value });
        switch (data.key) {
          case "on":
            this.setState({ on: data.value });
            break;
          case "youtube":
            this.setState({ video: data.value });
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
        {console.log(this.state.weather)}
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
                    commandKey={this.state.commandKey}
                    commandValue={this.state.commandValue}
                    weather={this.state.weather}
                    video={this.state.video}
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
