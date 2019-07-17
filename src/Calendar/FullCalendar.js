import React, { Component } from "react";

class FullCalendar extends Component {
  state = {};

  whatever = () => {};

  render() {
    return (
      <div className="fullcalendarwrap">
        <div className={this.props.calendarFullClass}>
          <iframe
            src="https://calendar.google.com/calendar/b/0/embed?height=600&amp;wkst=1&amp;bgcolor=%233F51B5&amp;ctz=Europe%2FLondon&amp;src=OXM4b2JwMGJiOTMxNDYyZmdoZGpwY2QwbThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;mode=MONTH&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showNav=0&amp;showTitle=0&amp;showDate=0"
            width="1100"
            height="640"
            frameborder="0"
            scrolling="no"
          />
        </div>
        <div className={this.props.calendarFullClassB}>
          <iframe
            src="https://calendar.google.com/calendar/b/0/embed?height=600&amp;wkst=1&amp;bgcolor=%23EF6C00&amp;ctz=Europe%2FLondon&amp;src=OXM4b2JwMGJiOTMxNDYyZmdoZGpwY2QwbThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;mode=AGENDA&amp;showTz=0&amp;showCalendars=0&amp;showTabs=0&amp;showPrint=0&amp;showNav=0&amp;showTitle=0&amp;showDate=0"
            width="1100"
            height="300"
            frameborder="0"
            scrolling="no"
          />{" "}
          
          {/* <ul>
            todo:
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
            <li>Blah blah: 12/5</li>
        
          </ul> */}
        </div>
      </div>
    );
  }
}

export default FullCalendar;
