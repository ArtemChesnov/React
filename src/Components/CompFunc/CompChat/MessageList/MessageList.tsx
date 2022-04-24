import React, { FC, useEffect, useRef } from 'react';
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
  const messagesEndRef = useRef<null | HTMLElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="chat-wrp" data-testid="chat">
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
        <span ref={messagesEndRef}></span>
      </ul>
    </div>
  );
};
