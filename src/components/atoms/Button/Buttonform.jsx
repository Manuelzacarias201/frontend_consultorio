import React from 'react';

const Buttonform = ({ onClick, children }) => {
  return (
    <button onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttonform;
