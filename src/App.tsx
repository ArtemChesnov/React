import React, { FC, useRef, useState, useCallback, useEffect } from 'react';
import { Message } from './Components/CompFunc/Message';
import { MessageForm } from './Components/CompFunc/CompChat/MessageForm';
import { MessageList } from './Components/CompFunc/CompChat/MessageList/MessageList';
import { nanoid } from 'nanoid';
import './App.scss';
interface Message {
  id: string;
  autor: string;
  value: string;
  now: string;
}

export const App: FC = () => {
  const toChat = useRef<HTMLHeadingElement>(null);
  const [messages, setMessage] = useState<Message[]>([]);

  const srollBtn = () => {
    if (toChat && toChat.current) {
      toChat.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const addMessage = useCallback(
    (autorValue: string, messageValue: string) => {
      setMessage([
        ...messages,
        {
          id: nanoid(),
          autor: autorValue,
          value: messageValue,
          now: new Date().toLocaleTimeString().slice(0, -3),
        },
      ]);
    },
    [messages]
  );

  useEffect(() => {
    if (
      messages.length > 0 &&
      messages[messages.length - 1].autor !== 'Душнила'
    ) {
      const timeout = setTimeout(() => {
        setMessage([
          ...messages,
          {
            id: nanoid(),
            autor: 'Душнила',
            value: `Привет ${messages[messages.length - 1].autor}, ты скучный`,
            now: new Date().toLocaleTimeString().slice(0, -3),
          },
        ]);
      }, 2000);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [messages]);

  return (
    <div className="App">
      <header className="App-header" data-testid="header">
        <Message name={'Артём Чеснов'} />
        <button className="scroll-btn" onClick={srollBtn}>
          Далее
        </button>
      </header>
      <main className="App-main">
        <section ref={toChat} className="messageList">
          <MessageList messages={messages} />
          <MessageForm addMessage={addMessage} />
        </section>
      </main>
    </div>
  );
};
