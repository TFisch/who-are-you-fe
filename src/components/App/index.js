import React, { Component } from 'react';
import DateSubmitForm from '../common/DateSubmitForm';
import Header from '../Header';
import './App.css';
import { fetchDeaths, fetchDateId, fetchUsers } from '../../utilities/apiCalls';

class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    // fetchDeaths();
    fetchDateId('FEBRUARY 17', 1989);
    fetchUsers();
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
    );
  }
}

export default App;
