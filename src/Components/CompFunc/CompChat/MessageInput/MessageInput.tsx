import React, { FC } from 'react';
import './MessageInput.scss';

interface MessageInputProps {
  messageValue: string;
  setMessageValue: (event: string) => void;
}

export const MessageInput: FC<MessageInputProps> = ({
  messageValue,
  setMessageValue,
}) => {
  return (
    <textarea
      className="message-input"
      required
      onChange={(event) => {
        setMessageValue(event.target.value);
      }}
      value={messageValue}
      placeholder="Напишите сообщение..."
    />
  );
};
