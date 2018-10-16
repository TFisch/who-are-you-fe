import React, { Component } from 'react';
import DateSubmitForm from '../common/DateSubmitForm'
import Header from '../Header'
import ReincarnationDisplay from '../ReincarnationDisplay'
import './App.css';
import { fetchDeaths, fetchDateId, fetchUsers } from '../../utilities/apiCalls';

class App extends Component {
  constructor() {
    super()
    this.state = {
      showSubmitForm: true,

  }

  componentDidMount() {
    // fetchDeaths();
    // fetchDateId('FEBRUARY 17', 1989);
    fetchUsers();
  }

  hideForm = () => {
    this.setState({ showSubmitForm: false })
  }

  render() {
    return (
      <div>
        <Header />
        {this.state.showSubmitForm &&
          <DateSubmitForm
            headerText="WHO ARE YOU?"
            inputOneText="What is your name?"
            inputTwoText="What is your birthday?"
            hideForm={this.hideForm}
          />
        }
        {!this.state.showSubmitForm &&
          <ReincarnationDisplay />
        }

      </div>
    );
  }
}

export default App;
