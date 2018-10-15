import react, { Component } from 'react';

class DateSubmitForm extends Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>WHO ARE YOU?</h1>
        <h3>What Is Your Name?</h3>
        <input type="text" />
        <h3>What Is Your Birthday</h3>
        <input type="date" />
      </div>
    )
  }
}

export default DateSubmitForm;