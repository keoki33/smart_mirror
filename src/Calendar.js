import React, { Component } from "react";

class Calendar extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className={this.props.calendarClass}>
        <iframe
          src="https://calendar.google.com/calendar/b/0/embed?height=380&amp;wkst=2&amp;bgcolor=%23EF6C00&amp;ctz=Europe%2FLondon&amp;src=OXM4b2JwMGJiOTMxNDYyZmdoZGpwY2QwbThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;mode=WEEK&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showNav=0&amp;showTitle=0&amp;showDate=0"
          width="380"
          height="380"
          frameborder="0"
          scrolling="no"
        />
      </div>
    );
  }
}

export default Calendar;
