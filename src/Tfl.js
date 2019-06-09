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
      <div className="tube">
        {/* console.log("test") */}
        {this.displayStatus()}
      </div>
    );
  }
}

export default Tfl;
