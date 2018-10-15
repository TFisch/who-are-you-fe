import React, { Component } from 'react';
import DateSubmitForm from '../common/DateSubmitForm'
import './App.css';

class App extends Component {
  render() {
    return (
      <DateSubmitForm
        headerText="WHO ARE YOU?"
        inputOneText="What is your name?"
        inputTwoText="What is your birthday?"
      />

    )
  }
}

export default App;
