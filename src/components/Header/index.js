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
        await this.props.showReincarnatedUsers();
        await this.props.getCleanUsers();
        break;
      default:
        return;
    }
  };

  render() {
    return (
      <nav className="header">
        <h1 className="header-title">Who Were You?</h1>
        <div className="button-wrap">
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
