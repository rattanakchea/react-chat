import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import CardItem from "./components/CardItem";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div id="left">
          <div className="top-left">
            <h1>Categories</h1>
            <ul>
              <li>Citizenship tests</li>
            </ul>
          </div>
          <div className="bottom" />
        </div>
        <div id="right">
          <div className="Content">
            <CardItem />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
