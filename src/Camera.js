import React, { Component } from "react";
import ReactPlayer from "react-player";

class Camera extends Component {
  state = { muted: false };

  unMute = () => {
    this.setState({ muted: false });
  };

  render() {
    return (
      <div className={this.props.cameraClass}>
        {/* <iframe
          id="player"
          type="text/html"
          width="640"
          height="390"
          src="http://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1&origin=http://example.com"
          frameborder="0"
        /> */}

        <ReactPlayer
          width="50%"
          height="50%"
          // youtubeConfig={{
          //     playerVars: { enablejsapi: 1, autoplay: 1, playsinline: 0 }
          // }}
          className={this.props.cameraClass}
          url="https://www.facebook.com/100009619878328/videos/2229928410671133/"
          playing={this.props.cameraplaying}
          muted={this.props.cameramuted}
          volume="1"
          // onPlay={this.unMute}
        />

        {this.props.muted === true && (
          <i id="mute" class="material-icons">
            volume_off
          </i>
        )}
      </div>
    );
  }
}

export default Camera;
