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

  // useEffect(() => {
  //   if (
  //     chatId &&
  //     chats[chatId]?.length > 0 &&
  //     chats[chatId][chats[chatId].length - 1].author !== 'Душнила'
  //   ) {
  //     const timeout = setTimeout(() => {
  //       setMessages({
  //         ...messages,
  //         [chatId]: [
  //           ...messages[chatId],
  //           {
  //             id: nanoid(),
  //             author: 'Душнила',
  //             value: `Привет ${
  //               messages[chatId][messages[chatId].length - 1].author
  //             }, ты скучный!`,
  //             now: new Date().toLocaleTimeString().slice(0, -3),
  //           },
  //         ],
  //       });
  //     }, 1000);

  //     return () => {
  //       clearTimeout(timeout);
  //     };
  //   }
  // }, [chatId, messages, setMessages]);

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
