import React from 'react';
import './AutorInput.css';

export const AutorInput = ({ autorValue, setAutorValue }) => {
  return (
    <input
      value={autorValue}
      onChange={(event) => {
        setAutorValue(event.target.value);
      }}
      type="text"
      className="autor-input"
      required
      placeholder="Введите ваше имя..."
    />
  );
};
