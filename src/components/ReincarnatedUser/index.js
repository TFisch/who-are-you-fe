import React from 'react';
import './styles.css';

const ReincarnatedUser = ({ user, handleClick, submitNotes }) => {
  return (
    <div className="reincarnated-user" id={user.id}>
      <div className="user-details">
        <h2 className="user-name">{user.name}</h2>
        <h2 className="reincarnated-person">{user.reincarnatedPerson}</h2>
        <h2 className="day">{user.day}</h2>
        <h2 className="year">{user.year}</h2>
        <h2 className="astrology-sign">{user.astrologySign}</h2>
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
