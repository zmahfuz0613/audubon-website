import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component {
  render() {
    const birdsIndexView = this.props.birds.map((bird, i) => (
      <Link to={`/birds/${bird.name}`}>
        <img src={bird.image} alt={bird.name} />
      </Link>
    ));

    return <div>{birdsIndexView}</div>;
  }
}
