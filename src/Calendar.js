import React, { Component } from "react";

class Calendar extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="calendar">
        Calendar
        <iframe
          src="https://calendar.google.com/calendar/embed?src=en.uk%23holiday%40group.v.calendar.google.com&ctz=Europe%2FLondon"
          //   width="800"
          height="800"
          scrolling="no"
        />
      </div>
    );
  }
}

export default Calendar;
