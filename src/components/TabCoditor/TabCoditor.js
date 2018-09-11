import React, { Component } from "react";
import "./TabCoditor.css";
import Tab from "./Tab";
/**
 * TabCoditor consists of Skip, reveal answer, next buttons to control flashcard testing
 */
class TabCoditor extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    this.titles = this.props.data.map(item => item.title);
    console.log(this.titles);
  }

  render() {
    return (
      <div className="tabs-coditor">
        <ol className="tab-list">
          {this.props.data.map((item, index) => {
            return (
              <Tab
                key={index}
                title={item.title}
                isActive={item.isActive || false}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          <pre>`some code or html here;`</pre>
        </div>
      </div>
    );
  }
}
export default TabCoditor;
