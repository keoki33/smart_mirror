import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ActionCable from "actioncable";

import Home from "./Home";
import Navbar from "./Navbar";

class App extends Component {
  state = {
    commandList: [],
    commandValue: "",
    commandKey: "",
    on: "true"
  };

  whatever = () => {};

  componentDidMount() {
    // this.timer = setInterval(() => this.getItems(), 1000);
    // fetch("https://api.tfl.gov.uk/Line/dlr/Status?detail=false")
    //   .then(resp => resp.json())
    //   .then(x => this.setState({ Status: x, loading: false }));
    ///////////////////

    var cable = ActionCable.createConsumer("wss://0906cc06.eu.ngrok.io/cable");

    cable.subscriptions.create("UpdateChannel", {
      received: data => {
        // console.log("update_channel received data", data.key);
        this.setState({ commandKey: data.key, commandValue: data.value });
        switch (data.key) {
          case "on":
            this.setState({ on: data.value });
        }
      }
    });
  }

  render() {
    return (
      <div className="main">
        <Navbar />
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
