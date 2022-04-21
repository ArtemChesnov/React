import React, { useState, memo } from 'react';
import { AutorInput } from './AutorInput/AutorInput';
import { MessageButton } from './MessageButton/MessageButton';
import { MessageInput } from './MessageInput/MessageInput';
import './MessageForm.scss';

interface FormProps {
  addMessage: (autorValue: string, messageValue: string) => void;
}

export const MessageForm = memo<FormProps>(({ addMessage }) => {
  const [autorValue, setAutorValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
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
});
