import React, { Component } from 'react';
import DateSubmitForm from '../common/DateSubmitForm'
import Header from '../Header'
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
      <div>
        <Header />
        <DateSubmitForm
          headerText="WHO ARE YOU?"
          inputOneText="What is your name?"
          inputTwoText="What is your birthday?"
        />
      </div>

    )
  }
}

export default App;
