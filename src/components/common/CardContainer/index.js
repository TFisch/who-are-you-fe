import React from 'react';
import ReincarnatedUser from '../../ReincarnatedUser';

const CardContainer = ({ users }) => {
  const displayUsers = users.map(user => {
    return <ReincarnatedUser user={user} />;
  });
  return <div className="card-container">{displayUsers}</div>;
};

export default CardContainer;
