import React from 'react';

export const Button = (props) => {
  return (
    <button type="button" className="form-btn" onClick={props.click}>
      Добавить
    </button>
  );
};
