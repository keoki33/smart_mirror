import React, { Component } from "react";

var synth = window.speechSynthesis;

class News extends Component {
  state = {
    news: [],
    newsIndex: 0,
    imageUrl: "",
    headline: "",
    content: "",
    description: "",
    articleUrl: ""
  };

  speak = text => {
    var msg = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(msg);
  };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=2b346b31436940e5bef4dc0df775a12f"
    )
      .then(resp => resp.json())
      .then(news => this.setState({ news }, () => this.cycleHeadline()));

    this.interval = setInterval(() => this.cycleHeadline(), 10000);
  }

  componentWillUnmount() {
    synth.cancel();
    clearInterval(this.interval);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.email !== this.props.email) {
      this.props.sendEmail(
        this.state.articleUrl,
        this.state.imageUrl,
        this.state.headline
      );
    }
  }

  cycleHeadline = () => {
    // console.log(this.state.news.articles[this.state.newsIndex]);
    // console.log(this.state.newsIndex);
    if (this.state.newsIndex == this.state.news.articles.length) {
      this.setState({ newsIndex: 0 });
    }

    this.setState(
      {
        imageUrl: this.state.news.articles[this.state.newsIndex].urlToImage,
        headline: this.state.news.articles[this.state.newsIndex].title,
        content: this.state.news.articles[this.state.newsIndex].content,
        description: this.state.news.articles[this.state.newsIndex].description,
        articleUrl: this.state.news.articles[this.state.newsIndex].url,
        newsIndex: this.state.newsIndex + 1
      },
      () =>
        setTimeout(() => {
          this.speak(`${this.state.headline}`);
        }, 2000)
    );
  };

  render() {
    return (
      <div className={this.props.newsFullClass}>
        <h1>{this.state.headline}</h1>
        {/* <div className="fadeLine" /> */}
        <img
          width="512"
          height="384"
          src={this.state.imageUrl}
          alt={this.state.imageUrl}
          className="newsImage"
        />

        <p>{this.state.content}</p>
        {/* {this.state.content} */}
        {/* {console.log(this.state.news.articles)} */}
      </div>
    );
  }
}

export default News;
