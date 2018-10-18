import React from 'react';
import './styles.css';

const ReincarnatedUser = ({ user, handleClick, submitNotes }) => {
  return (
    <div className="reincarnated-user" id={user.id}>
      <div className="user-details">
        <h3 className="user-name">{user.name}</h3>
        <h3 className="reincarnated-person">{user.reincarnatedPerson}</h3>
        <p className="day">{user.day}</p>
        <p className="year">{user.year}</p>
        <p className="astrology-sign">{user.astrologySign}</p>
        <button
          className="user-delete-button"
          onClick={handleClick}
          id={user.id}
        >
          Delete User
        </button>
      </div>
      <div className="user-notes">
        <p contentEditable="true" className="user-notes">
          {user.notes}
        </p>
        <button className="submit-notes" onClick={submitNotes}>
          Submit Notes
        </button>
      </div>
    </div>
  );
};

export default ReincarnatedUser;
