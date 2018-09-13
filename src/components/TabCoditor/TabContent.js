import React, { Component } from "react";
import axios from "axios";
import hljs from "highlight.js";
/**
 * TabContent content
 * props: title is required
 * */

const highlight = (language, str) => {
  try {
    return hljs.highlight(language, str).value;
  } catch (err) {
    console.warn(err);
  }
};

const style = `
.content {
  color: #333;
}
.content pre{
  margin: 0;
}
.content .hljs-keyword {
  color: #a71d5d;
}
.content .hljs-string {
  color: #183691;
}
.content .hljs-class .hljs-title {
  color: #795da3;
}
.content .xml .hljs-tag {
  color: #a71d5d;
}
.content .xml .hljs-tag .hljs-title,
.content .xml .hljs-tag .hljs-attribute,
.content .xml .hljs-tag .hljs-value {
  color: #333;
}
`;

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
    let className = "";
    if (activeTab === title) {
      className = "content-active";
    }

    return (
      <div>
        <style>{style}</style>
        <pre
          className={className + " highlight"}
          dangerouslySetInnerHTML={{
            __html: highlight(title, this.state.content)
          }}
        />
      </div>
    );

    if (content && content.text) {
      return <pre className={className}>{content.text}</pre>;
    }

    return null;
  }
}
export default TabContent;
