import React, { Component } from 'react';

class DateSubmitForm extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="dateSubmitForm">
        <h1>{this.props.headerText}</h1>
        <h3>{this.props.inputOneText}</h3>
        <input type="text" />
        <h3>{this.props.inputTwoText}</h3>
        <input type="date" />
      </div>
    )
  }
}

export default DateSubmitForm;