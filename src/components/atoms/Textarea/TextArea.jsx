import React from 'react';

const Textarea = ({ id, value, onChange, required }) => {
  return (
    <textarea
      id={id}
      value={value}
      onChange={onChange}
      required={required}
    ></textarea>
  );
};

export default Textarea;
