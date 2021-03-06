import React, { Component } from "react";
import TflTiles from "./TflTiles";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Tfl extends Component {
  state = {
    lines: []
  };

  componentDidMount() {
    fetch(
      "https://api.tfl.gov.uk/Line/Mode/tube%2Cdlr%2Coverground/Status?detail=false"
    )
      .then(resp => resp.json())
      .then(lines => this.setState({ lines }));
  }

  displayStatus = () => {
    // console.log(this.state.lines);
    return this.state.lines.map(x => <TflTiles key={x.name} line={x} />);
  };

  // componentWillUnmount() {
  //   clearInterval(this.timer);
  //   this.timer = null;
  // }

  // getItems() {
  //   fetch("http://localhost:3000/commands")
  //     .then(result => result.json())
  //     .then(result =>
  //       this.setState({
  //         commandList: result,
  //         commandValue: result[result.length - 1]["value"],
  //         commandKey: result[result.length - 1]["key"]
  //       })
  //     );

  //   console.log(this.state);
  // }

  render() {
    return (
      <div
        className={this.props.tflClass}
        onClick={event => {
          alert(
            "Hello and welcome to my mirror. 1. Click on Flatiron Icon and 2. Play then pause Youtube Video. Needs to be done on first load or if you refresh the screen to allow controls to work. Use remote control website to control. All commands take 1-2 seconds to take effect. Thank you for trying my site"
          );
        }}
      >
        <div className="tflback">
          <img
            className="tflLogo"
            src={require(`../images/tfl-logo.jpg`)}
            alt=""
            width="104"
            height="34"
          />
        </div>
        {/* console.log("test") */}
        {this.displayStatus()}
      </div>
    );
  }
}

export default Tfl;
