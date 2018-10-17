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
      showSubmitForm: true,
      showReincarnatedUsers: false,
      showReincarnation: false,
      cleanUsers: []
    };
  }

  // async componentDidMount() {
  //   fetchDeaths();
  //   const notes = 'Well hello there';
  //   const name = 'Cody Taft';
  //   const dateId = await fetchDateId('FEBRUARY 17', 1989);
  //   console.log(dateId);
  //   const deathByDate = await fetchDeathByDate(dateId, 1989);
  //   const users = await fetchUsers();
  //   console.log(users);
  //   const postedUser = await postUsers(name, deathByDate, notes);
  //   console.log(postedUser);
  //   console.log(await deleteUsers(6));
  //   console.log(await updateUser(34, 'hi'));
  // }

  hideForm = () => {
    this.setState({ showSubmitForm: false, showReincarnatedUsers: true });
  };

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
    return (
      <div>
        <Header
          hideForm={this.hideForm}
          showReincarnatedUsers={this.showReincarnatedUsers}
          getCleanUsers={this.getCleanUsers}
        />

        {this.state.showSubmitForm && (
          <DateSubmitForm
            headerText="WHO ARE YOU?"
            inputOneText="What is your name?"
            inputTwoText="What is your birthday?"
            hideForm={this.hideForm}
            showReincarnation={this.showReincarnation}
          />
        )}
        {this.state.showReincarnatedUsers && (
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
