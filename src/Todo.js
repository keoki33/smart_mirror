import React, { Component } from "react";

class Todo extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="todo">
        <iframe
          src="https://calendar.google.com/calendar/b/2/embed?height=400&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=Europe%2FLondon&amp;src=OXM4b2JwMGJiOTMxNDYyZmdoZGpwY2QwbThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23D81B60&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA"
          width="800"
          height="200"
          frameborder="0"
          scrolling="no"
        />
      </div>
    );
  }
}

export default Todo;
