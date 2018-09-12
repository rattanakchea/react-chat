import React, { Component } from "react";
import "./TabCoditor.css";
import Tab from "./Tab";
import TabContent from "./TabContent";
/**
 * TabCoditor consists of Skip, reveal answer, next buttons to control flashcard testing
 */
class TabCoditor extends Component {
  constructor(props) {
    super(props);
    console.log(props);

    // this.titles = this.props.data.map(item => item.title);
    // console.log(this.titles);

    const { data } = this.props;
    this.state = {
      activeTab: data[0].title
    };
    console.log("state: ", this.state);
  }

  onClickTabTitle = title => {
    console.log(title);
    this.setState({
      activeTab: title
    });
    console.log(this.state);
  };

  render() {
    const { data } = this.props;
    return (
      <div className="tabs-coditor">
        <ol className="tab-list">
          {data.map((item, index) => {
            return (
              <Tab
                activeTab={this.state.activeTab}
                onClick={this.onClickTabTitle}
                key={index}
                title={item.title}
              />
            );
          })}
        </ol>
        <div className="tab-content">
          {/* add logic here to display only content of the active tab */}
          {data.map((item, index) => {
            return (
              <TabContent
                activeTab={this.state.activeTab}
                title={item.title}
                content={item.content}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default TabCoditor;
