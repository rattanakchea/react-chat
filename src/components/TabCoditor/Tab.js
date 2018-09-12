import React, { Component } from "react";
import "./Tab.css";

/**
 * Tab item
 * props: title is required
 * */

class Tab extends Component {
  constructor(props) {
    super(props);
    // console.log("in Tab component: ", this.props);
  }

  onTabClick = () => {
    const { title, onClick } = this.props;
    // call in parent (TabCoditor) onClick event
    onClick(title);
  };

  render() {
    let isActive = this.props.isActive;
    let className = "tab-list-item";
    if (isActive) {
      className += " is-active";
    }
    return (
      <li onClick={this.onTabClick} className={className}>
        {this.props.title}
      </li>
    );
  }
}
export default Tab;
