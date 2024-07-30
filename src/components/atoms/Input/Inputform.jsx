import React from 'react';

const Inputform = ({ id, type, value, onChange, placeholder, required }) => {
  return (
    <input
      id={id}
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Inputform;
