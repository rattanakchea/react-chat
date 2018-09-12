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
    const { content } = this.props;

    if (content && content.text) {
      return <pre>{content.text}</pre>;
    }

    return null;
  }
}
export default TabContent;
