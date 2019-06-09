import React, { Component } from "react";
import ReactPlayer from "react-player";

class Video extends Component {
  state = { muted: false };

  unMute = () => {
    this.setState({ muted: false });
  };

  render() {
    return (
      <div className="video">
        {console.log("")}
        {console.log("")}
        {/* <iframe
          id="player"
          type="text/html"
          width="640"
          height="390"
          src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
          frameborder="0"
        /> */}
        <ReactPlayer
          width="100%"
          height="100%"
          // youtubeConfig={{
          //   playerVars: { enablejsapi: 1, autoplay: 1, playsinline: 0 }
          // }}
          url={this.props.url}
          playing={this.props.playing}
          muted={this.props.muted}
          volume={this.props.volume}
          onPlay={this.unMute}
        />
      </div>
    );
  }
}

export default Video;
