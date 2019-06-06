import React, { Component } from "react";

class TflTiles extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="tube">
        <p>
          {this.props.line.name}{" "}
          {this.props.line["lineStatuses"][0]["statusSeverityDescription"]}{" "}
          {this.props.line["lineStatuses"][0]["statusSeverityDescription"] ===
          "Good Service"
            ? " ✅"
            : "❌"}
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
