import React, { FC } from 'react';
import { MessageList } from 'src/Components/CompFunc/CompChat/MessageList/MessageList';
import { MessageForm } from 'src/Components/CompFunc/CompChat/MessageForm';
import { ChatList } from 'src/Components/CompFunc/ChatList';
import { Navigate, useParams } from 'react-router-dom';
import style from './Chats.module.scss';
import { useSelector } from 'react-redux';
import { selectChats, selectChatList } from 'src/store/chats/selectors';

export const Chats: FC = () => {
  const { chatId } = useParams();

  const chats = useSelector(selectChats);
  const chatList = useSelector(selectChatList);

  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className={style.chat__wrp}>
      <ChatList />
      <div className={style.chat__board}>
        <MessageList messages={chatId ? chats[chatId] : []} />
        <MessageForm />
      </div>
    </div>
  );
};
