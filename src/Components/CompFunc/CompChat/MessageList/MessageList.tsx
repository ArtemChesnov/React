import React, { FC } from 'react';
import './MessageList.scss';

interface Message {
  id: string;
  autor: string;
  value: string;
  now: string;
}

interface ListProps {
  messages: Message[];
}

export const MessageList: FC<ListProps> = ({ messages }) => {
  return (
    <div className="chat-wrp">
      <ul className="chat-message-list">
        {messages.map((message) => (
          <li key={message.id} className="chat-message-item">
            <h1 className="chat-message-autor">{message.autor}</h1>
            <br />
            <p className="chat-message-text">
              {message.value}
              <span className="chat-message-time">{message.now}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
