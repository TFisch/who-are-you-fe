import React, { Component } from 'react';
import DateSubmitForm from '../common/DateSubmitForm'
import './App.css';
import { fetchDeaths } from '../../utilities/apiCalls'

class App extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    fetchDeaths();
  }


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
