import React, { Component } from "react";
import NewsTile from "./NewsTile";

class News extends Component {
  state = {
    news: [],
    newsIndex: 0,
    imageUrl: "",
    headline: ""
  };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=gb&apiKey=2b346b31436940e5bef4dc0df775a12f"
    )
      .then(resp => resp.json())
      .then(news => this.setState({ news }, () => this.cycleHeadline()));
    this.interval = setInterval(() => this.cycleHeadline(), 10000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  cycleHeadline = () => {
    // console.log(this.state.news.articles[this.state.newsIndex]);
    // console.log(this.state.newsIndex);
    if (this.state.newsIndex == this.state.news.articles.length) {
      this.setState({ newsIndex: 0 });
    }
    this.setState({
      imageUrl: this.state.news.articles[this.state.newsIndex].urlToImage,
      headline: this.state.news.articles[this.state.newsIndex].title,
      newsIndex: this.state.newsIndex + 1
    });
  };

  whatever = () => {};

  render() {
    return (
      <div className="news">
        <img
          width="336"
          height="252"
          src={this.state.imageUrl}
          alt={this.state.imageUrl}
          className="newsImage"
        />
        <br />
        {this.state.headline}
        {/* {console.log(this.state.news.articles)} */}
      </div>
    );
  }
}

export default News;
