import React from 'react';
import shortid from 'shortid';

export const MessageList = ({ message }) => {
  return (
    <div className="message-board">
      <h1 className="message-title">Чат с Душнилой</h1>
      <div className="message-chat">
        <ul className="message-list">
          {message.map((message) => (
            <li key={shortid.generate()} className="message-item">
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
