import React, { Component } from "react";

class Calendar extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="calendar">
        <iframe
          src="https://calendar.google.com/calendar/b/2/embed?height=300&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=OXM4b2JwMGJiOTMxNDYyZmdoZGpwY2QwbThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D81B60&amp;showTitle=0&amp;showTz=0&amp;showCalendars=0&amp;showPrint=0&amp;showDate=0&amp;showTabs=0&amp;showNav=0&amp;mode=WEEK"
          width="500"
          height="300"
          frameborder="0"
          scrolling="no"
        />
        {console.log("calendar")}
      </div>
    );
  }
}

export default Calendar;
