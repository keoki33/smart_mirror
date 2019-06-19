import React, { Component } from "react";

class Google extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="google">
        <iframe
          src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F{https://www.facebook.com/100009619878328/videos/2229790300684944/}%2F&width=500&show_text=false&appId=169703439750548&height=280"
          width="500"
          height="280"
          scrolling="no"
          frameborder="0"
          allowTransparency="true"
        />
        Google Voice command:
        {/* {JSON.stringify(this.props.commandList.queryResult)} */}
        <br />
        Command Key: {this.props.commandKey}
        <br />
        Command Value: {this.props.commandValue}
      </div>
    );
  }
}

export default Google;
