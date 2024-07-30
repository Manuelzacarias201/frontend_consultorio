import React from 'react';
import Label from '../../atoms/Label/Label';
import Inputform from '../../atoms/Input/Inputform';
import Textarea from '../../atoms/Textarea/TextArea';

const FormField = ({ label, id, type, value, onChange, placeholder, required }) => {
  return (
    <div className="form-field">
      <Label htmlFor={id}>{label}</Label>
      {type === 'textarea' ? (
        <Textarea id={id} value={value} onChange={onChange} required={required} />
      ) : (
        <Inputform
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
      )}
    </div>
  );
};

export default FormField;