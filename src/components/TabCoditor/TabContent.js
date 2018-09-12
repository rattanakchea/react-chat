import React, { Component } from "react";

// if (item.isActive && item.content)
// return <pre>{item.content.text}</pre>;

/**
 * TabContent content
 * props: title is required
 * */

class TabContent extends Component {
  //   constructor() {}
  render() {
    const { activeTab, title, content } = this.props;
    let className = "";
    if (activeTab === title) {
      className = "content-active";
    }
    if (content && content.text) {
      return <pre className={className}>{content.text}</pre>;
    }

    return null;
  }
}
export default TabContent;
