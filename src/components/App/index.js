import React, { Component } from 'react';
import DateSubmitForm from '../common/DateSubmitForm';
import Header from '../Header';
import './App.css';
import {
  fetchDeaths,
  fetchDateId,
  fetchUsers,
  fetchDeathByDate,
  postUsers
} from '../../utilities/apiCalls';

class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    // fetchDeaths();
    const notes = 'Well hello there';
    const name = 'Cody Taft';

    const dateId = await fetchDateId('FEBRUARY 17', 1989);
    const deathByDate = await fetchDeathByDate(dateId, 1989);

    const users = await fetchUsers();
    console.log(users);
    const postedUser = await postUsers(name, deathByDate, notes);
    console.log(postedUser);
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
