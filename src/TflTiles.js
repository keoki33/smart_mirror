import React, { Component } from "react";

class TflTiles extends Component {
  state = {};

  whatever = () => {};

  showIcon = () => {
    switch (this.props.line["lineStatuses"][0]["statusSeverityDescription"]) {
      case "Good Service":
        return <i class="material-icons check">check_circle</i>;
      case "Minor Delays":
        return <i class="material-icons error">error</i>;
      default:
        return <i class="material-icons warning">warning</i>;
    }
  };

  render() {
    return (
      <div className="tube">
        <p>
          {this.props.line.name}{" "}
          {this.props.line["lineStatuses"][0]["statusSeverityDescription"]}{" "}
          {this.showIcon()}
        </p>
        {/* {console.log(this.props.line)}
        {console.log(
          this.props.line["lineStatuses"][0]["statusSeverityDescription"]
        )} */}
      </div>
    );
  }
}

export default TflTiles;
