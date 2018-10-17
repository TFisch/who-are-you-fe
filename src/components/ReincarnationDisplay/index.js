import React, { Component } from 'react';
import Submit from '../common/Submit';
import { postUsers } from '../../utilities/apiCalls';
import './styles.scss';


class ReincarnationDisplay extends Component {
  constructor() {
    super()
    this.state = {
      deathMatch: {},
      notes: ""
    }
  }

  componentDidMount = () => {
    this.setState({ deathMatch: this.props.deathsByDate })
  }

  handleNotes = (e) => {
    this.setState({ notes: e.target.value })
  }


  handleSubmit = (e) => {
    postUsers(this.props.username, this.props.deathsByDate, this.state.notes);
    this.setState({ notes: "" });
    //s
  }

  render() {
    const name = Object.values(this.props.deathsByDate[0]);
    return (
      <article className="reincarnation-display">
        <h2>{this.props.username}! You Were {name[1]} In Your Past Life!</h2>
        <div className="comment-wrapper">
          <label>Leave a comment:</label>
          <div className="bottom-wrapper">
            <textarea className="comment" name="comment" onChange={this.handleNotes} value={this.state.notes}>
            </textarea>
            <Submit buttonText="SAVE" handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </article>
    )
  }
}

export default ReincarnationDisplay;