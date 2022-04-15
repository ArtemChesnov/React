import React, { useState } from 'react';
import { AutorInput } from './AutorInput/AutorInput';
import { MessageButton } from './MessageButton/MessageButton';
import { MessageInput } from './MessageInput/MessageInput';
import './MessageForm.css';

export const MessageForm = ({ addMessage }) => {
  const [autorValue, setAutorValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const handleSubmitForm = (event) => {
    event.preventDefault();
    addMessage(autorValue, messageValue);
    setAutorValue('');
    setMessageValue('');
  };

  const autorChange = (event) => {
    setAutorValue(event.target.value);
  };

  const messageChange = (event) => {
    setMessageValue(event.target.value);
  };

  return (
    <form onSubmit={handleSubmitForm} data-testid="form">
      <div className="mesageFromUser-form">
        <div className="message-form">
          <AutorInput autorValue={autorValue} changeName={autorChange} />
          <MessageInput
            changeMessage={messageChange}
            messageValue={messageValue}
          />
          <MessageButton
            disabled={!messageValue || !autorValue}
            click={() => {
              console.log('xer');
            }}
          />
        </div>
      </div>
    </form>
  );
};
