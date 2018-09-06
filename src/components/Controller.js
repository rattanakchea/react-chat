import React, { Component } from "react";
import "./Controller.css";

/**
 * Controller consists of Skip, reveal answer, next buttons to control flashcard testing
 */
class Controller extends Component {
  next() {
    console.log("next");
    console.log(this.props.x);
  }
  render() {
    return (
      <div className="controller">
        <a className="button is-light">Skip</a>
        <a
          onClick={this.props.controller.next}
          className="button is-info is-inverted"
        >
          Reveal
        </a>
        <a className="button is-primary is-inverted">Next</a>
      </div>
    );
  }
}
export default Controller;
