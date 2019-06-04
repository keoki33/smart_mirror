import React, { Component } from "react";

class Google extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="card">
        <h1>Google Voice command:</h1>
        <h3>Command Key: {this.props.commandKey}</h3>
        <h3>Command Value: {this.props.commandValue}</h3>
      </div>
    );
  }
}

export default Google;
