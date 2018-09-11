import React, { Component } from "react";
import "./TabCoditor.css";

/**
 * Tab item
 * props: title is required
 * */

class Tab extends Component {
  //   constructor() {}

  render() {
    let isActive = this.props.isActive;
    let className = "tab-list-item";
    if (isActive) {
      className += " is-active";
    }

    return <li className={className}>{this.props.title}</li>;
  }
}
export default Tab;
