import React, { Component } from 'react';
import Submit from '../common/Submit';
import './styles.scss';


class ReincarnationDisplay extends Component {
  constructor() {
    super()
    this.state = {
      deathMatch: {}
    }
  }

  componentDidMount = () => {
    this.setState({ deathMatch: this.props.deathsByDate })
  }


  handleSubmit = (e) => {
    console.log(e);
  }

  render() {
    const name = Object.values(this.props.deathsByDate[0]);
    return (
      <article className="reincarnation-display">
        <h2>{this.props.username}! You Were {name[1]} In Your Past Life!</h2>
        <div className="comment-wrapper">
          <label>Leave a comment:</label>
          <div className="bottom-wrapper">
            <textarea className="comment" name="comment">
            </textarea>
            <Submit buttonText="SAVE" handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </article>
    )
  }
}

export default ReincarnationDisplay;