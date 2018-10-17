import React, { Component } from 'react';
import DateSubmitForm from '../common/DateSubmitForm'
import Header from '../Header'
import ReincarnationDisplay from '../ReincarnationDisplay'
import './App.css';
import {
  fetchDeaths,
  fetchDateId,
  fetchUsers,
  fetchDeathByDate,
  postUsers,
  deleteUsers,
  updateUser
} from '../../utilities/apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: '',
      showSubmitForm: true,
      deathsByDate: {}

    }
  }

  async componentDidMount() {
    fetchDeaths();
    const notes = 'Well hello there';
    const name = 'Cody Taft';
    const users = await fetchUsers();
  }

  findDeathMatch = async (cleanedDate, year) => {
    const dateId = await fetchDateId(cleanedDate, year);
    const deathsByDate = await fetchDeathByDate(dateId, year);
    await this.setState({ deathsByDate })
  }

  hideForm = (cleanedDate, year, username) => {
    this.setState({ username });
    this.findDeathMatch(cleanedDate, year);
    this.setState({ showSubmitForm: false })
  }

  render() {
    const { showSubmitForm, deathsByDate, username } = this.state;
    return (
      <div>
        <Header />

        {showSubmitForm &&
          <DateSubmitForm
            headerText="WHO ARE YOU?"
            inputOneText="What is your name?"
            inputTwoText="What is your birthday?"
            hideForm={this.hideForm}
          />
        }
        {!showSubmitForm &&
          <ReincarnationDisplay deathsByDate={deathsByDate} username={username} />
        }

      </div>
    );
  }
}

export default App;
