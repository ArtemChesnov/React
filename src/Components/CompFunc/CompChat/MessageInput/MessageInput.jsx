import React from 'react';
import './MessageInput.css';

export const MessageInput = (props) => {
  return (
    <>
      <textarea
        type="text"
        className="message-input"
        required
        onChange={props.changeMessage}
        value={props.messageValue}
        placeholder="Напишите сообщение..."
      />
    </>
  );
};
