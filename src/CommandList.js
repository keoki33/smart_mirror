import React, { Component } from "react";

class CommandList extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="command">
        Command List:
        <ul>
          <li>Good Morning, Wake Up - Turn main on. key: on, value: true</li>
          <li>Go to sleep, Goodbye - Turn main off. key: on, value: false</li>
          <li>Play youtube - Play youtube video. key: youtube, value: true</li>
          <li>
            Pause youtube - Pause youtube video. key: youtube, value: false
          </li>
          <li>
            You tube "volume" - Adjust youtube volume. key: volume, value:
            "volume"
          </li>
          Must give # between 0 and 1, eg 0.5
          <li>
            youtube fullscree - youtube fullscreen. key: youtubeSize, value:
            videoFull
          </li>
          <li>
            youtube normal - youtube normal screen. key: youtubeSize, value:
            video
          </li>
          <li>Display "value" - test function. key: display, value: "value"</li>
          <li>
            Show forecast - show 7 day forecast. key: forecast, value: "true"
          </li>
          <li>
            Close forecast - close 8 day forecast. key: forecast, value: "false"
          </li>
        </ul>
      </div>
    );
  }
}

export default CommandList;
