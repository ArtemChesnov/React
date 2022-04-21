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
    <div className="message-board">
      <h1 className="message-title">Чат с Душнилой</h1>
      <div className="message-chat">
        <ul className="message-list">
          {messages.map((message) => (
            <li key={message.id} className="message-item">
              <h1 className="message-autor">{message.autor}</h1>
              <p className="message-text">
                {message.value}
                <span className="message-time">{message.now}</span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
