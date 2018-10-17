import React from 'react';

const ReincarnatedUser = ({ user }) => {
  return (
    <div className="reincarnated-user" id={user.id}>
      <h3 className="user-name">{user.name}</h3>
      <h3 className="reincarnated-person">{user.reincarnatedPerson}</h3>
      <p className="day">{user.day}</p>
      <p className="year">{user.year}</p>
      <p className="astrology-sign">{user.astrologySign}</p>
    </div>
  );
};

export default ReincarnatedUser;
