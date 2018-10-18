import React from 'react';
import ReincarnatedUser from '../../ReincarnatedUser';
import './styles.css';

const CardContainer = ({ users, handleClick, submitNotes }) => {
  const displayUsers = users.map(user => {
    return (
      <ReincarnatedUser
        user={user}
        handleClick={handleClick}
        submitNotes={submitNotes}
      />
    );
  });
  return (
    <div className="card-container">
      <div className="table-headers">
        <h2 className="user-name">User Name</h2>
        <h2 className="reincarnated-person">Reincarnated As</h2>
        <h2 className="day">Birthday</h2>
        <h2 className="year">Year Born</h2>
        <h2 className="astrology-sign">Astrological Sign</h2>
        <h2 className="delete-title">Delete?</h2>
      </div>
      {displayUsers}
    </div>
  );
};

export default CardContainer;
