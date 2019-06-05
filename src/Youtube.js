import React, { Component } from "react";

class Youtube extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="card">
        <h1>you tube</h1>
        <iframe
          id="player"
          type="text/html"
          width="640"
          height="390"
          src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
          frameborder="0"
        />
      </div>
    );
  }
}

export default Youtube;
