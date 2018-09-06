import React, { Component } from "react";
import "./CardItem.css";

class CardItem extends Component {
  render() {
    return (
      <article className="card-item">
        <section className="front">What is the constitution?</section>
        <section className="back">Back of the flashcard!</section>
      </article>
    );
  }
}
export default CardItem;
