import React from 'react';
import './styles.css';

const ReincarnatedUser = ({ user, handleClick }) => {
  return (
    <div className="reincarnated-user" id={user.id}>
      <h3 className="user-name">{user.name}</h3>
      <h3 className="reincarnated-person">{user.reincarnatedPerson}</h3>
      <p className="day">{user.day}</p>
      <p className="year">{user.year}</p>
      <p className="astrology-sign">{user.astrologySign}</p>
      <button className="user-delete-button" onClick={handleClick} id={user.id}>
        Delete User
      </button>
    </div>
  );
};

export default ReincarnatedUser;
