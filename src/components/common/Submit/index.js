import React from 'react';

const Submit = ({ handleSubmit }) => {
  return (
    <button className="submit-button" onClick={handleSubmit}>
      SUBMIT
    </button>
  )
}

export default Submit;