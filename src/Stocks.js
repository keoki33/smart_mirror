import React, { Component } from "react";

class Stocks extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="stocks">
        <marquee behavior="scroll" direction="left">
          HTML scrolling text...{" "}
        </marquee>
      </div>
    );
  }
}

export default Stocks;
