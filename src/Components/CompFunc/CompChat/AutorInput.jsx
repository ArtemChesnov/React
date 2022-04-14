import React from 'react';

export const AutorInput = (props) => {
  return (
    <input
      value={props.autorValue}
      onChange={props.changeName}
      type="text"
      className="autor-input"
      required
      placeholder="Введите ваше имя..."
    />
  );
};
