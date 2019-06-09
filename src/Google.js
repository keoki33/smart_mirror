import React, { Component } from "react";

class Google extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="google">
        Google Voice command:
        {/* {JSON.stringify(this.props.commandList.queryResult)} */}
        <br />
        Command Key: {this.props.commandKey}
        <br />
        Command Value: {this.props.commandValue}
      </div>
    );
  }
}

export default Google;
