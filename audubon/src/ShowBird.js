import React, { Component } from "react";

export default class ShowBird extends Component {
  render() {
    const birdName = this.props.match.params.name;

    const bird = this.props.birds.find(bird => bird.name === birdName);

    return (
      <div>
        <img src={bird.image} alt={bird.name} />
        <h2>{bird.name}</h2>
        <h3>{bird.genus}</h3>
        <p>{bird.conservationStatus}</p>
      </div>
    );
  }
}
