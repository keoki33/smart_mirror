import React, { Component } from "react";

// import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

class Tfl extends Component {
  state = { Status: [], score: [], chosen: 0 };

  componentDidMount() {
    this.timer = setInterval(() => this.getItems(), 1000);
    fetch("https://api.tfl.gov.uk/Line/dlr/Status?detail=false")
      .then(resp => resp.json())
      .then(x => this.setState({ Status: x, loading: false }));
  }

  displayStatus = () => {
    return this.state.Status.map(x => <h1>{x.name}</h1>);
  };

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }

  getItems() {
    fetch("http://localhost:3000/scores")
      .then(result => result.json())
      .then(result =>
        this.setState({
          score: result,
          chosen: result[result.length - 1]["score"]
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
        <h1>Chosen # {this.state.chosen}</h1>
        {this.displayStatus()}
      </div>
    );
  }
}

export default Tfl;
