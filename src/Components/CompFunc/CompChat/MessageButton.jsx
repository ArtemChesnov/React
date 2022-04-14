import React from 'react';

export const MessageButton = (props) => {
  return (
    <button
      onClick={props.click}
      disabled={props.disabled}
      className="message-button"
      id="button"
    >
      Отправить
    </button>
  );
};
