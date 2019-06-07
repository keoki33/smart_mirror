import React, { Component } from "react";
import { Player } from "video-react";

class Video extends Component {
  state = { player: this.props.video };

  componentDidUpdate = prevProps => {
    if (prevProps.video !== this.props.video) {
      switch (this.props.video) {
        case "play":
          console.log("play");
          return this.refs.player.play();
        case "pause":
          console.log("pause");
          return this.refs.player.pause();
        default:
      }
    }
  };

  render() {
    return (
      <div className="card">
        {console.log("")}

        <Player
          ControlBar
          autoHide={false}
          fluid="false"
          videowidth="320"
          videoheight="240"
          className="video"
          ref="player"
          playsInline
          poster="/assets/poster.png"
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
        />
      </div>
    );
  }
}

export default Video;
