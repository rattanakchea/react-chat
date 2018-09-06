import React, { Component } from "react";
import "./Clock.css";

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startTime: new Date(),
      endTime: new Date()
    };
  }
  componentDidMount() {
    this.updateClock();
  }

  componentWillUnmount() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }
  updateClock() {
    this.timerId = setTimeout(() => {
      this.setState(
        {
          endTime: new Date()
        },
        this.updateClock
      );
    }, 1000);
  }

  // return number of seconds
  timeDiff(date1, date2) {
    // no need to use getTime()
    return Math.floor((date2 - date1) / 1000);
  }

  render() {
    return (
      <div>
        <h3>Duration</h3>
        <p>
          Minute:{" "}
          {Math.floor(
            this.timeDiff(this.state.startTime, this.state.endTime) / 60
          )}
        </p>
        <p>
          Second: {this.timeDiff(this.state.startTime, this.state.endTime) % 60}
        </p>
      </div>
    );
  }
}
export default Clock;
