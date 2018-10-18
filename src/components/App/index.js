import React, { Component } from 'react';
import DateSubmitForm from '../common/DateSubmitForm';
import Header from '../Header';
import ReincarnationDisplay from '../ReincarnationDisplay';
import CardContainer from '../common/CardContainer';
import './App.css';
import {
  fetchDateId,
  fetchUsers,
  fetchDeathByDate,
  deleteUser
} from '../../utilities/apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      showSubmitForm: true,
      deathsByDate: {},
      showReincarnatedUsers: false,
      showReincarnation: false,
      showReincarnationDisplay: false,
      cleanUsers: []
    };
  }

  findDeathMatch = async (cleanedDate, year) => {
    const dateId = await fetchDateId(cleanedDate, year);
    const deathsByDate = await fetchDeathByDate(dateId, year);
    await this.setState({ deathsByDate, showReincarnationDisplay: true });
  };

  hideForm = () => {
    this.setState({ showSubmitForm: false });
  };

  showForm = () => {
    this.setState({
      showSubmitForm: true,
      showReincarnation: false,
      showReincarnationDisplay: false
    });
  };

  handleDeathSubmit = (cleanedDate, year, username) => {
    this.hideForm();
    this.setState({ username });
    this.findDeathMatch(cleanedDate, year);
  };

  showReincarnatedUsers = () => {
    this.setState({
      showReincarnatedUsers: true,
      showReincarnationDisplay: false
    });
  };

  // showReincarnationDisplay = () => {
  //   this.setState({ showReincarnationDisplay: true });
  // };

  getCleanUsers = async () => {
    const cleanUsers = await fetchUsers();
    this.setState({ cleanUsers });
    console.log(this.state.showReincarnatedUsers);
  };

  handleClick = async e => {
    deleteUser(e.target.id);
    e.target.parentNode.remove();
  };

  render() {
    const {
      showSubmitForm,
      deathsByDate,
      username,
      showReincarnatedUsers,
      showReincarnationDisplay
    } = this.state;
    return (
      <div>
        <Header
          hideForm={this.hideForm}
          showForm={this.showForm}
          getCleanUsers={this.getCleanUsers}
          showReincarnatedUsers={this.showReincarnatedUsers}
        />

        {showSubmitForm && (
          <DateSubmitForm
            headerText="WHO ARE YOU?"
            inputOneText="What is your name?"
            inputTwoText="What is your birthday?"
            handleDeathSubmit={this.handleDeathSubmit}
            showReincarnation={this.showReincarnation}
          />
        )}

        {showReincarnationDisplay && (
          <ReincarnationDisplay
            deathsByDate={deathsByDate}
            username={username}
            tryAgain={this.showForm}
            getCleanUsers={this.getCleanUsers}
            showReincarnatedUsers={this.showReincarnatedUsers}
          />
        )}

        {showReincarnatedUsers && (
          <CardContainer
            users={this.state.cleanUsers}
            handleClick={this.handleClick}
            showReincarnatedUsers={this.showReincarnatedUsers}
          />
        )}
      </div>
    );
  }
}

export default App;
