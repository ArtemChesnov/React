import React, { useState, useEffect, useCallback } from 'react';
import { AutorInput } from './AutorInput';
import { MessageButton } from './MessageButton';
import { MessageInput } from './MessageInput';
import { MessageList } from './MessageList';

export const MessageForm = () => {
  const [autorValue, setAutorValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [message, setMessage] = useState([]);

  const clickSubmit = useCallback(() => {
    setMessage([
      ...message,
      {
        autor: autorValue,
        value: messageValue,
        now: new Date().toLocaleTimeString().slice(0, -3),
      },
    ]);
    setAutorValue('');
    setMessageValue('');
  }, [message, autorValue, messageValue]);

  useEffect(() => {
    if (message.length > 0 && message[message.length - 1].autor !== 'Душнила') {
      const timeout = setTimeout(() => {
        setMessage([
          ...message,
          {
            autor: 'Душнила',
            value: `Привет ${message[message.length - 1].autor}, ты скучный.`,
            now: new Date().toLocaleTimeString().slice(0, -3),
          },
        ]);
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [message]);

  const autorChange = (event) => {
    setAutorValue(event.target.value);
  };

  const messageChange = (event) => {
    setMessageValue(event.target.value);
  };

  return (
    <form>
      <div className="mesageFromUser-form">
        <MessageList message={message} />
        <div className="message-form">
          <AutorInput autorValue={autorValue} changeName={autorChange} />
          <MessageInput
            changeMessage={messageChange}
            messageValue={messageValue}
          />
          <MessageButton
            disabled={!messageValue || !autorValue}
            click={clickSubmit}
          />
        </div>
      </div>
    </form>
  );
};
