import React, { Component } from "react";
import ActionCable from "actioncable";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Tfl extends Component {
  state = { Status: [], commandList: [], commandValue: "", commandKey: "" };

  componentDidMount() {
    // this.timer = setInterval(() => this.getItems(), 1000);
    // fetch("https://api.tfl.gov.uk/Line/dlr/Status?detail=false")
    //   .then(resp => resp.json())
    //   .then(x => this.setState({ Status: x, loading: false }));
    ///////////////////

    var cable = ActionCable.createConsumer("ws://localhost:3000/cable");

    cable.subscriptions.create("UpdateChannel", {
      received: data => {
        // console.log("update_channel received data", data.key);
        this.setState({ commandKey: data.key, commandValue: data.value });
      }
    });
  }

  displayStatus = () => {
    return this.state.Status.map(x => <h1>{x.name}</h1>);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  getItems() {
    fetch("http://localhost:3000/commands")
      .then(result => result.json())
      .then(result =>
        this.setState({
          commandList: result,
          commandValue: result[result.length - 1]["value"],
          commandKey: result[result.length - 1]["key"]
        })
      );

    // console.log(this.state.score[this.state.score.length - 1]["score"]);
    console.log(this.state);
  }

  render() {
    return (
      <div className="card">
        <h1>TFL</h1>
        <h1>Test deploy</h1>
        <h1>Command Key: {this.state.commandKey}</h1>
        <h1>Command Value: {this.state.commandValue}</h1>

        {this.displayStatus()}
      </div>
    );
  }
}

export default Tfl;
