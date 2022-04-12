import React from 'react';

export const MessageButton = (props) => {
  return (
    <button onClick={props.click} className="message-button">
      Отправить
    </button>
  );
};
