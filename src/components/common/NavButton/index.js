import React from 'react';
import './styles.scss';

const NavButton = ({ buttonText, handleClick }) => {
  return (
    <button className="nav-button" onClick={handleClick}>
      <h3>{buttonText}</h3>
    </button>
  );
};

export default NavButton;
