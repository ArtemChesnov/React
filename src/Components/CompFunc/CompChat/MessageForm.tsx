import React, { FC, useState, memo } from 'react';
import { AutorInput } from './AutorInput/AutorInput';
import { MessageButton } from './MessageButton/MessageButton';
import { MessageInput } from './MessageInput/MessageInput';
import style from './MessageForm.module.scss';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMessage } from '../../../store/chats/actions';

export const MessageForm: FC = memo(() => {
  const [autorValue, setAutorValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const dispatch = useDispatch();
  const { chatId } = useParams();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chatId) {
      dispatch(addMessage(chatId, messageValue, autorValue));
    }

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
