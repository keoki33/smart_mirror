import React, { Component } from "react";

class NewsTile extends Component {
  state = { news: [], newsIndex: 0 };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=gb&apiKey=2b346b31436940e5bef4dc0df775a12f"
    )
      .then(resp => resp.json())
      .then(news => this.setState({ news }));
    this.interval = setInterval(
      () => this.setState({ time: Date.now() }),
      5000
    );
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  whatever = () => {};

  render() {
    return (
      <div className="news">
        {console.log(this.state.news.articles)}
        <h1>NewsTile</h1>
      </div>
    );
  }
}

export default NewsTile;
