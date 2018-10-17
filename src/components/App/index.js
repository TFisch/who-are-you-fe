import React, { Component } from 'react';
import DateSubmitForm from '../common/DateSubmitForm';
import Header from '../Header';
import ReincarnationDisplay from '../ReincarnationDisplay';
import CardContainer from '../common/CardContainer';
import './App.css';
import {
  fetchDeaths,
  fetchDateId,
  fetchUsers,
  fetchDeathByDate,
  postUsers,
  deleteUsers,
  updateUser,
  deleteUser
} from '../../utilities/apiCalls';
import { userCleaner } from '../../utilities/helper';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      showSubmitForm: true,
      deathsByDate: {},
      showReincarnatedUsers: false,
      showReincarnation: false,
      cleanUsers: []
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
    await this.setState({ deathsByDate, showSubmitForm: false })
  }

  hideForm = (cleanedDate, year, username) => {
    this.setState({ username, showSubmitForm: false, showReincarnatedUsers: true });
    this.findDeathMatch(cleanedDate, year);
  }

  showReincarnation = () => {
    this.setState({ showReincarnation: true });
  };

  getCleanUsers = async () => {
    const cleanUsers = await fetchUsers();
    this.setState({ cleanUsers });
  };

  handleClick = async e => {
    deleteUser(e.target.id);
    e.target.parentNode.remove();
  };

  render() {
    const { showSubmitForm, deathsByDate, username, showReincarnatedUsers } = this.state;
    return (
      <div>
        <Header
          hideForm={this.hideForm}
          showReincarnatedUsers={this.showReincarnatedUsers}
          getCleanUsers={this.getCleanUsers}
        />

        {showSubmitForm && (
          <DateSubmitForm
            headerText="WHO ARE YOU?"
            inputOneText="What is your name?"
            inputTwoText="What is your birthday?"
            hideForm={this.hideForm}
            showReincarnation={this.showReincarnation}
          />
        )}

        {!showSubmitForm &&
          <ReincarnationDisplay deathsByDate={deathsByDate} username={username} />
        }
          
        {showReincarnatedUsers && (
          <CardContainer
            users={this.state.cleanUsers}
            handleClick={this.handleClick}
          />
        )}
        {this.state.showReincarnation && <ReincarnationDisplay />}
      </div>
    );
  }
}

export default App;
