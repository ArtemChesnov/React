import React, { FC, useState, memo } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addMessageWithReply } from '../../../store/chats/slice';
import { ChatsState } from 'src/store/chats/reducer';
import { AddMessage } from 'src/store/chats/types';
import { ThunkDispatch } from 'redux-thunk';

import { AuthorInput } from './AuthorInput/AuthorInput';
import { MessageButton } from './MessageButton/MessageButton';
import { MessageInput } from './MessageInput/MessageInput';

import style from './MessageForm.module.scss';

export const MessageForm: FC = memo(() => {
  const [authorValue, setAuthorValue] = useState('');
  const [messageValue, setMessageValue] = useState('');

  const dispatch =
    useDispatch<ThunkDispatch<ChatsState, void, ReturnType<AddMessage>>>();
  const { chatId } = useParams();

  const handleSubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (chatId && messageValue) {
      dispatch(
        addMessageWithReply({
          chatId,
          message: {
            author: authorValue,
            value: messageValue,
            now: new Date().toLocaleTimeString().slice(0, -3),
          },
        })
      );
    }

    setAuthorValue('');
    setMessageValue('');
  };

  return (
    <form onSubmit={handleSubmitForm} className={style.form} data-testid="form">
      <AuthorInput authorValue={authorValue} setAuthorValue={setAuthorValue} />
      <MessageInput
        setMessageValue={setMessageValue}
        messageValue={messageValue}
      />
      <MessageButton disabled={!messageValue || !authorValue} />
    </form>
  );
});
