import React, { Component } from 'react';
import NavButton from '../common/NavButton';
import './styles.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <nav className="header">
        <h1 className="header-title">Who Were You?</h1>
        <div className="button-wrap">
          <NavButton buttonText="DEATHS" />
          <NavButton buttonText="REINCARNATIONS" />
          <NavButton buttonText="ADD A DEATH" />
        </div>
      </nav>
    );
  }
}

export default Header;
