import React, { FC, useEffect, useRef } from 'react';
import style from './MessageList.module.scss';

export interface Message {
  id: string;
  author: string;
  value: string;
  now: string;
}

interface ListProps {
  messages: Message[];
}

export const MessageList: FC<ListProps> = ({ messages }) => {
  const messagesEndRef = useRef<null | HTMLElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={style.message} data-testid="chat">
      <ul className={style.message__list}>
        {messages.map((message) => (
          <li key={message.id} className={style.message__item}>
            <h1 className={style.message__autor}>{message.author}</h1>
            <br />
            <p className={style.message__text}>
              {message.value}
              <span className={style.message__time}>{message.now}</span>
            </p>
          </li>
        ))}
        <span ref={messagesEndRef}></span>
      </ul>
    </div>
  );
};
