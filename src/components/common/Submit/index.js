import React from 'react';

const Submit = ({ handleSubmit, buttonText }) => {
  return (
    <button className="submit-button" onClick={handleSubmit}>
      {buttonText}
    </button>
  )
}

export default Submit;