import React, { Component } from 'react';
import Submit from '../Submit';


class ReincarnationDisplay extends Component {
  constructor() {
    super()
    state = {

    }
  }

  handleSubmit = (e) => {
    console.log('hi')
  }

  render() {
    return (
      <article className="reincarnation-display">
        <h2>Name! You Were DEAD PERSON in Your Past Life!</h2>

        <Submit handleSubmit={this.handleSubmit} />
      </article>
    )
  }
}

export default ReincarnationDisplay;