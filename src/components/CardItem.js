import React, { Component } from "react";
import "./CardItem.css";

class CardItem extends Component {
  render() {
    return (
      <article className="card-item">
        <section className="front">{this.props.item.front}</section>
        <section className="back">{this.props.item.front}</section>
      </article>
    );
  }
}
export default CardItem;
