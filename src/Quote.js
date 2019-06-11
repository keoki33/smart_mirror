import React, { Component } from "react";

const quotes = [
  "Keep your face always toward the sunshine—and shadows will fall behind you.",
  "It is always the simple that produces the marvelous.",
  "The world is full of magical things patiently waiting for our wits to grow sharper.",
  "Let us make our future now, and let us make our dreams tomorrow’s reality.",
  "All you need is the plan, the road map, and the courage to press on to your destination.",
  "The glow of one warm thought is to me worth more than money.",
  "The power of imagination makes us infinite.",
  "Talk is cheap. Show me the code.",
  "Programs must be written for people to read, and only incidentally for machines to execute.",
  "Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  `Give a man a program, frustrate him for a day. Teach a man to program, frustrate him for a lifetime.`,
  `I'm not a great programmer; I'm just a good programmer with great habits.`,
  `Walking on water and developing software from a specification are easy if both are frozen.`,
  `Try to be a rainbow in someone’s cloud.`,
  `Happiness is not something you postpone for the future; it is something you design for the present.`,
  "Be yourself; everyone else is already taken."
];

var msg = new SpeechSynthesisUtterance("Hello World");

class Quote extends Component {
  state = {};

  displayQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)];
  };

  speak = () => {};

  render() {
    return (
      <div className="quote">
        Mani's thought for the day: <br />
        {this.displayQuote()}
        {this.speak()}
      </div>
    );
  }
}

export default Quote;
