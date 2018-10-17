import React from 'react';
import ReincarnatedUser from '../../ReincarnatedUser';
import './styles.css';

const CardContainer = ({ users, handleClick }) => {
  const displayUsers = users.map(user => {
    return <ReincarnatedUser user={user} handleClick={handleClick} />;
  });
  return (
    <div className="card-container">
      <div className="table-headers">
        <h3 className="user-name">User Name</h3>
        <h3 className="reincarnated-person">Reincarnated As</h3>
        <p className="day">Birthday</p>
        <p className="year">Year Born</p>
        <p className="astrology-sign">Astrological Sign</p>
        <p className="delete-title">Delete?</p>
      </div>
      {displayUsers}
    </div>
  );
};

export default CardContainer;
