import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardItem from "./components/CardItem";
import Clock from "./components/Clock";

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
  }

  render() {
    return (
      <div className="container">
        <div id="left">
          <div className="top-left">
            <Clock />
            <h1>Categories</h1>
            <ul>
              <li>Citizenship tests</li>
            </ul>
          </div>
          <div className="bottom" />
        </div>
        <div id="right">
          <div className="Content">
            <CardItem item={this.selectedCard} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
