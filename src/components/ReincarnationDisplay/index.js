import React, { Component } from 'react';
import Submit from '../common/Submit';
import './styles.scss';


class ReincarnationDisplay extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  handleSubmit = (e) => {
    console.log('hi')
  }

  render() {
    return (
      <article className="reincarnation-display">
        <h2>Name! You Were DEAD PERSON in Your Past Life!</h2>

        <Submit buttonText="SAVE" handleSubmit={this.handleSubmit} />
      </article>
    )
  }
}

export default ReincarnationDisplay;