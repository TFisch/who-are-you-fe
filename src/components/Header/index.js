import React, { Component } from 'react';

class Header extends Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return (
      <nav className="header">
        <h1>Who Were You?</h1>
        <div className="button-wrap"></div>
      </nav>
    )
  }

}

export default Header;