import React, { Component } from "react";
import "./TabCoditor.css";

/**
 * Tab item
 * props: title is required
 * */

class Tab extends Component {
  render() {
    return <li className="tab-list-item is-active">{this.props.title}</li>;
  }
}
export default Tab;
