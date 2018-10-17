import React from 'react';
import ReincarnatedUser from '../../ReincarnatedUser';

const CardContainer = ({ users, handleClick }) => {
  const displayUsers = users.map(user => {
    return <ReincarnatedUser user={user} handleClick={handleClick} />;
  });
  return <div className="card-container">{displayUsers}</div>;
};

export default CardContainer;
