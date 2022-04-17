import React, { useState, useEffect } from 'react';
import { AutorInput } from './AutorInput';
import { MessageButton } from './MessageButton';
import { MessageInput } from './MessageInput';
import shortid from 'shortid';

export const MessageForm = () => {
  const [autorValue, setAutorValue] = useState('');
  const [messageValue, setMessageValue] = useState('');
  const [name] = useState('click');
  const [message, setMessage] = useState([]);

  const clickSubmit = () => {
    if (!messageValue || !autorValue) {
      alert('Вы должны заполнить все поля!');
      return false;
    } else {
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
    }
  };

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
    <>
      <form>
        <div className="mesageFromUser-form">
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
          <div className="message-form">
            <AutorInput autorValue={autorValue} changeName={autorChange} />
            <MessageInput
              changeMessage={messageChange}
              messageValue={messageValue}
            />
            <MessageButton name={name} click={clickSubmit} />
          </div>
        </div>
      </form>
    </>
  );
};
