import React from 'react';
import './MessageInput.css';

export const MessageInput = ({ messageValue, setMessageValue }) => {
  return (
    <>
      <textarea
        type="text"
        className="message-input"
        required
        onChange={(event) => {
          setMessageValue(event.target.value);
        }}
        value={messageValue}
        placeholder="Напишите сообщение..."
      />
    </>
  );
};
