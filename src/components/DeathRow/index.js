import React from 'react';

const DeathRow = ({ name, date, year }) => {
  return (
    <div className="death-row">
      <h3 className="name">{name}</h3>
      <p className="date">{date}</p>
      <p className="year">{year}</p>
    </div>
  )
}

export default DeathRow;