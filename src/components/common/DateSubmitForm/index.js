import React, { Component } from 'react';

class DateSubmitForm extends Component {
  constructor() {
    super()
    this.state = {
      nameInput: "",
      dateInput: 0
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  render() {
    return (
      <div className="dateSubmitForm">
        <h1>{this.props.headerText}</h1>
        <h3>{this.props.inputOneText}</h3>
        <input type="text" name="nameInput" onChange={this.handleChange} value={this.nameInput} />
        <h3>{this.props.inputTwoText}</h3>
        <input type="date" name="dateInput" onChange={this.handleChange} value={this.dateInput} />
      </div>
    )
  }
}

export default DateSubmitForm;