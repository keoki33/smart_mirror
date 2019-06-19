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
          width="100%"
          height="100%"
          // youtubeConfig={{
          //     playerVars: { enablejsapi: 1, autoplay: 1, playsinline: 0 }
          // }}
          className="camera"
          url="https://www.facebook.com/100009619878328/videos/2229828800681094/?id=100009619878328"
          playing={this.props.playing}
          muted={this.props.muted}
          volume={this.props.volume}
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
