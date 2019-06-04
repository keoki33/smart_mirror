import React, { Component } from "react";

class Calendar extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="card">
        <h1>Calendar</h1>
        <iframe
          src="https://calendar.google.com/calendar/embed?src=en.uk%23holiday%40group.v.calendar.google.com&ctz=Europe%2FLondon"
          width="800"
          height="600"
          frameborder="0"
          scrolling="no"
        />
      </div>
    );
  }
}

export default Calendar;
