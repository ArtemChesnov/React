import React from 'react';
import './MessageList.css';

export const MessageList = ({ message }) => {
  return (
    <div className="message-board">
      <h1 className="message-title">Чат с Душнилой</h1>
      <div className="message-chat">
        <ul className="message-list">
          {message.map((message, idx) => (
            <li key={idx} className="message-item">
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
