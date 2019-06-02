import React, { Component } from "react";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Tfl extends Component {
  state = { Status: [] };

  componentDidMount() {
    fetch("https://api.tfl.gov.uk/Line/dlr/Status?detail=false")
      .then(resp => resp.json())
      .then(x => this.setState({ Status: x, loading: false }));
  }

  displayStatus = () => {
    return this.state.Status.map(x => <h1>{x.name}</h1>);
  };

  render() {
    return (
      <div className="card">
        <h1>TFL</h1>
        {console.log(this.state)}
        {this.displayStatus()}
      </div>
    );
  }
}

export default Tfl;
