import React, { useRef } from 'react';
import './App.css';
import { Form } from './Components/CompFunc/Form';
import { Message } from './Components/CompFunc/Message';
import { MessageForm } from './Components/CompFunc/CompChat/MessageForm';

export const App = () => {
  const toToDo = useRef();
  const toChat = useRef();

  return (
    <>
      <div className="App">
        <header className="App-header">
          <Message name={'Артём Чеснов'} />
          <button
            className="scroll-btn"
            onClick={() =>
              toToDo.current.scrollIntoView({ behavior: 'smooth' })
            }
          >
            Далее
          </button>
        </header>
        <main className="App-main">
          <section ref={toToDo} name={'toToDO'} className="toDoList">
            <Form />
            <button
              className="scroll-btn-toDO"
              onClick={() =>
                toChat.current.scrollIntoView({ behavior: 'smooth' })
              }
            >
              Далее
            </button>
          </section>
          <section ref={toChat} className="messageList">
            <MessageForm />
          </section>
        </main>
      </div>
    </>
  );
};
