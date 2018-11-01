import React, { Component } from 'react';
import NavButton from '../common/NavButton';
import './styles.css';

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  handleClick = async e => {
    const buttonName = e.target.innerText;
    switch (buttonName) {
      case 'REINCARNATIONS':
        await this.props.hideForm();
        await this.props.getCleanUsers();
        await this.props.showReincarnatedUsers();
        break;
      default:
        return;
    }
  };

  handleTitleClick = e => {
    this.props.showForm();
  };

  render() {
    return (
      <nav className="header">
        <div className="button-wrap">
          <h1 className="header-title" onClick={this.handleTitleClick}>
            Who Were You?
          </h1>
          <NavButton
            buttonText="REINCARNATIONS"
            name="reincarnations"
            handleClick={this.handleClick}
          />
        </div>
      </nav>
    );
  }
}

export default Header;
