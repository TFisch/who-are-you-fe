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
        <div className="comment-wrapper">
          <label for="comment">Leave a comment:</label>
          <div className="bottom-wrapper">
            <textarea class="comment" name="comment">
            </textarea>
            <Submit buttonText="SAVE" handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </article>
    )
  }
}

export default ReincarnationDisplay;