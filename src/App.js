import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardItem from "./components/CardItem";
import Clock from "./components/Clock";
import Controller from "./components/Controller";
import TabCoditor from "./components/TabCoditor/TabCoditor";

class App extends Component {
  constructor() {
    super();
    let selectedCard = {
      front: "What is constitution?",
      back: "It is the land of the law."
    };
    let selectedCard2 = {
      front: "What is constitution?",
      back: "It is the land of the law."
    };

    this.selectedCard = {
      front: "What is constitution?",
      back: "It is the land of the law."
    };

    this.state = {
      list: [selectedCard, selectedCard2]
    };

    this.controller = {
      next: this.next
    };

    // the first item isActive is true
    this.tabConfigs = [
      { title: "JavaScript" },
      { title: "Python" },
      { title: "Ruby" }
    ];

    this.tabConfigs[0].content = {
      text: "some js content",
      file: "./files/javascript.js"
    };

    this.tabConfigs[1].content = {
      text: "some python content",
      file: "./files/python.py"
    };
    this.tabConfigs[2].content = {
      text: "some ruby text",
      file: "./files/ruby.rb"
    };
  }

  // go to next question
  next() {
    console.log("click on next");

    // error: this is undefined
    // this.selectedCard = {
    //   front: "New card?",
    //   back: "It is the land of the law."
    // };
  }

  render() {
    return (
      <div className="app-container">
        <div id="left">
          <div className="top-left">
            <Clock />
            <br />

            <h2>Categories</h2>
            <ul>
              <li>Citizenship tests</li>
            </ul>
          </div>
          <div className="bottom" />
        </div>
        <div id="right">
          <div className="content">
            {/* <CardItem item={this.selectedCard} />
            <Controller controller={this.controller} /> */}

            <TabCoditor data={this.tabConfigs} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
