import React, { Component } from 'react';
import Submit from '../Submit';
import './styles.scss';
import { concatDates, getMonthString, checkDay, validateBirthday } from '../../../utilities/helper';

class DateSubmitForm extends Component {
  constructor() {
    super();
    this.state = {
      nameInput: "",
      dateInput: 0,
      dateSubmitted: false,
      dobError: ""
    }

  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };


  handleSubmit = (e) => {
    e.preventDefault();
    const date = this.state.dateInput;
    const day = date.substring(8, 10);
    const month = date.substring(5, 7);
    const year = date.substring(0, 4);
    const checkBirthday = validateBirthday(day, month, year);
    if (checkBirthday === "error") {
      this.setState({ dobError: "Sorry! Birthday must fall between 1970 and 1996" })
    } else {
      const dayString = checkDay(day);
      const monthString = getMonthString(month);
      const cleanedDate = concatDates(monthString, dayString);
      this.setState({ dateSubmitted: true });
      this.props.hideForm();
    }
  }


  render() {

    return (
      <form className="date-submit-form">
        <h1>{this.props.headerText}</h1>
        <h3>{this.props.inputOneText}</h3>
        <input
          type="text"
          name="nameInput"
          onChange={this.handleChange}
          value={this.nameInput}
        />
        <h3>{this.props.inputTwoText}</h3>
        <input type="date" name="dateInput" min="2000-01-02" max="2004-12-31" onChange={this.handleChange} value={this.dateInput} />
        <p>{this.state.dobError}</p>
        <Submit handleSubmit={this.handleSubmit} buttonText="SUBMIT" />

      </form>
    );
  }
}

export default DateSubmitForm;
