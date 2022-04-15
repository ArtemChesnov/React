import React from 'react';
import './AutorInput.css';

export const AutorInput = (props, { func }) => {
  return (
    <input
      value={props.autorValue}
      onChange={props.changeName}
      type="text"
      className="autor-input"
      required
      placeholder="Введите ваше имя..."
      click={func}
    />
  );
};
