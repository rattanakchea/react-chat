import React, { Component } from "react";
import axios from "axios";

/**
 * TabContent content
 * props: title is required
 * */

class TabContent extends Component {
  constructor() {
    super();
    this.content = "";
  }

  componentDidMount() {
    const { activeTab, title, content } = this.props;
    let className = "";
    if (activeTab === title) {
      className = "content-active";
    }
    if (content && content.file) {
      axios.get(content.file).then(res => {
        console.log("fetch file: ", content.file);
        console.log("response: ", res.data);

        this.content = <pre className={className}>{res.data}</pre>;
      });
    }
  }
  render() {
    const { activeTab, title, content } = this.props;
    let className = "";
    if (activeTab === title) {
      className = "content-active";
    }

    return this.content || "hello";

    if (content && content.text) {
      return <pre className={className}>{content.text}</pre>;
    }

    return null;
  }
}
export default TabContent;
