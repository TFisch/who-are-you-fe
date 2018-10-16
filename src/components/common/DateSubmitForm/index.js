import React, { Component } from 'react';
import Submit from '../Submit';
import './styles.scss';
import { concatDates, getMonthString, checkDay } from '../../../utilities/helper';

class DateSubmitForm extends Component {
  constructor() {
    super()
    this.state = {
      nameInput: "",
      dateInput: "0000-00-00",

    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const date = this.state.dateInput;
    const day = date.substring(8, 10);
    const month = date.substring(5, 7);
    const year = date.substring(0, 4);
    const dayString = checkDay(day);
    const monthString = getMonthString(month);
    const cleanedDate = concatDates(monthString, dayString);

  }

  render() {
    return (
      <form className="date-submit-form">
        <h1>{this.props.headerText}</h1>
        <h3>{this.props.inputOneText}</h3>
        <input type="text" name="nameInput" onChange={this.handleChange} value={this.nameInput} />
        <h3>{this.props.inputTwoText}</h3>
        <input type="date" name="dateInput" min="2000-01-02" max="2004-12-31" onChange={this.handleChange} value={this.dateInput} />
        <Submit handleSubmit={this.handleSubmit} />
      </form>
    )
  }
}

export default DateSubmitForm;