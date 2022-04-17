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

  return (
    <form onSubmit={handleSubmitForm} data-testid="form">
      <div className="mesageFromUser-form">
        <div className="message-form">
          <AutorInput autorValue={autorValue} setAutorValue={setAutorValue} />
          <MessageInput
            setMessageValue={setMessageValue}
            messageValue={messageValue}
          />
          <MessageButton disabled={!messageValue || !autorValue} />
        </div>
      </div>
    </form>
  );
};
