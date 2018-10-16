import React from 'react';
import "./styles.scss"

const NavButton = ({ buttonText }) => {
  return (
    <button className="nav-button">
      <h3>{buttonText}</h3>
    </button>
  )
}

export default NavButton;