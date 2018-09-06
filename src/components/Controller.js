import React, { Component } from "react";
import "./Controller.css";

/**
 * Controller consists of Skip, reveal answer, next buttons to control flashcard testing
 */
class Controller extends Component {
  render() {
    return (
      <div className="controller">
        <a class="button is-light">Skip</a>
        <a class="button is-info is-inverted">Reveal</a>
        <a class="button is-primary is-inverted">Next</a>
      </div>
    );
  }
}
export default Controller;
