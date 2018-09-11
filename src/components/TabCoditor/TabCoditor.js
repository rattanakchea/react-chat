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

          return this.props.data.map(item=> {
            return (<Tab title={item.title} />);
          });
            
          <li className="tab-list-item is-active">JavaScript</li>

          <Tab title="Python" />
          <Tab title="Ruby" />
        </ol>
        <div className="tab-content">
          <pre>`some code or html here;`</pre>
        </div>
      </div>
    );
  }
}
export default TabCoditor;
