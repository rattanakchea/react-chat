import React, { Component } from "react";
import axios from "axios";
import hljs from "highlight.js";
import "highlight.js/styles/github.css";
/**
 * TabContent content
 * props: title is required
 * */

const highlight = (language, str) => {
  try {
    return hljs.highlight(language.toLowerCase(), str).value;
  } catch (err) {
    console.warn(err);
  }
};

class TabContent extends Component {
  constructor() {
    super();

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    const { content } = this.props;
    if (content && content.file) {
      axios.get(content.file).then(res => {
        console.log("fetch file: ", content.file);
        console.log("response: ", res.data);
        this.setState({
          content: res.data
        });
      });
    }
  }
  render() {
    const { activeTab, title, content } = this.props;
    let className = "html";
    if (activeTab === title) {
      className += " content-active";
    }

    return (
      <pre
        className={className}
        dangerouslySetInnerHTML={{
          __html: highlight(title, this.state.content)
        }}
      />
    );

    if (content && content.text) {
      return <pre className={className}>{content.text}</pre>;
    }

    return null;
  }
}
export default TabContent;
