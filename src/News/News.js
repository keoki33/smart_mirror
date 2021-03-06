import React, { Component } from "react";
import NewsTile from "./NewsTile";

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

  // speak = text => {
  //   var msg = new SpeechSynthesisUtterance(text);
  //   speechSynthesis.speak(msg);
  // };

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=2b346b31436940e5bef4dc0df775a12f"
    )
      .then(resp => resp.json())
      .then(news => this.setState({ news }, () => this.cycleHeadline()));

    this.interval = setInterval(() => this.cycleHeadline(), 5000);
  }

  componentWillUnmount() {
    // synth.cancel();
    clearInterval(this.interval);
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.email !== this.props.email) {
  //     this.props.sendEmail(
  //       this.state.articleUrl,
  //       this.state.imageUrl,
  //       this.state.headline
  //     );
  //   }
  // }

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
          // this.speak(`${this.state.headline} , , ${this.state.description}`);
        }, 2000)
    );
  };

  render() {
    return (
      <div
        className={this.props.newsClass}
        onClick={event => {
          alert(
            "Hello and welcome to my mirror. 1. Click on Flatiron Icon and 2. Play then pause Youtube Video. Needs to be done on first load or if you refresh the screen to allow controls to work. Use remote control website to control. All commands take 1-2 seconds to take effect. Thank you for trying my site"
          );
        }}
      >
        {/* <div className="fadeLine" /> */}
        <h3>{this.state.headline}</h3>
        <img
          width="512"
          height="384"
          src={this.state.imageUrl}
          alt={this.state.imageUrl}
          className="newsImage"
        />

        {/* <p>{this.state.content}</p> */}
        {/* {this.state.content} */}
        {/* {console.log(this.state.news.articles)} */}
      </div>
    );
  }
}

export default News;
