import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardItem from "./components/CardItem";
import Clock from "./components/Clock";
import Controller from "./components/Controller";

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
      next: function() {
        console.log("from app.js next");
      }
    };
  }

  // go to next question
  next() {
    console.log("click on next");
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
            <CardItem item={this.selectedCard} />

            <Controller controller={this.controller} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
