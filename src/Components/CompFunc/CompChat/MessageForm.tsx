import React, { FC, useState, memo } from 'react';
import { AutorInput } from './AutorInput/AutorInput';
import { MessageButton } from './MessageButton/MessageButton';
import { MessageInput } from './MessageInput/MessageInput';
import style from './MessageForm.module.scss';

interface FormProps {
  addMessage: (autorValue: string, messageValue: string) => void;
}

export const MessageForm: FC<FormProps> = memo(({ addMessage }) => {
  const [autorValue, setAutorValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    addMessage(autorValue, messageValue);
    setAutorValue('');
    setMessageValue('');
  };

  return (
    <form onSubmit={handleSubmitForm} className={style.form} data-testid="form">
      <AutorInput autorValue={autorValue} setAutorValue={setAutorValue} />
      <MessageInput
        setMessageValue={setMessageValue}
        messageValue={messageValue}
      />
      <MessageButton disabled={!messageValue || !autorValue} />
    </form>
  );
});
