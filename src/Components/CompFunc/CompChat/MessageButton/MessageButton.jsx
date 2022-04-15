import React from 'react';
import './MessageButton.css';

export const MessageButton = ({ disabled, click }) => {
  return (
    <button
      onClick={click}
      disabled={disabled}
      className="message-button"
      id="button"
      type="submit"
    >
      Отправить
    </button>
  );
};
