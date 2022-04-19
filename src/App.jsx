import React, { useRef, useState, useCallback, useEffect } from 'react';
import './App.css';
import { Message } from './Components/CompFunc/Message';
import { MessageForm } from './Components/CompFunc/CompChat/MessageForm';
import { MessageList } from './Components/CompFunc/CompChat/MessageList/MessageList';

export const App = () => {
  const toChat = useRef();
  const [message, setMessage] = useState([]);

  const addMessage = useCallback(
    (autorValue, messageValue) => {
      setMessage([
        ...message,
        {
          autor: autorValue,
          value: messageValue,
          now: new Date().toLocaleTimeString().slice(0, -3),
        },
      ]);
    },
    [message]
  );

  useEffect(() => {
    if (message.length > 0 && message[message.length - 1].autor !== 'Душнила') {
      const timeout = setTimeout(() => {
        setMessage([
          ...message,
          {
            autor: 'Душнила',
            value: `Привет ${message[message.length - 1].autor}, ты скучный`,
            now: new Date().toLocaleTimeString().slice(0, -3),
          },
        ]);
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [message]);

  return (
    <div className="App" data-testid="app">
      <header className="App-header" data-testid="header">
        <Message name={'Артём Чеснов'} />
        <button
          className="scroll-btn"
          onClick={() => {
            toChat.current.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Далее
        </button>
      </header>
      <main className="App-main">
        <section ref={toChat} className="messageList">
          <MessageList message={message} />
          <MessageForm addMessage={addMessage} />
        </section>
      </main>
    </div>
  );
};
