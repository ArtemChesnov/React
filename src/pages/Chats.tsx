import React, { FC, useCallback, useEffect } from 'react';
import { MessageList } from './../Components/CompFunc/CompChat/MessageList/MessageList';
import { MessageForm } from './../Components/CompFunc/CompChat/MessageForm';
import { nanoid } from 'nanoid';
import { ChatList } from '../Components/CompFunc/ChatList';
import { Chat, Messages } from '../App';
import { Navigate, useParams } from 'react-router-dom';
import './Chats.scss';

interface ChatsProps {
  messages: Messages;
  setMessages: React.Dispatch<React.SetStateAction<Messages>>;
  chatList: Chat[];
  onAddChat: (chats: Chat) => void;
  onDeleteChat: (chatName: string) => void;
}
export const Chats: FC<ChatsProps> = ({
  chatList,
  onAddChat,
  messages,
  setMessages,
  onDeleteChat,
}) => {
  const { chatId } = useParams();

  useEffect(() => {
    if (
      chatId &&
      messages[chatId]?.length > 0 &&
      messages[chatId][messages[chatId].length - 1].autor !== 'Душнила'
    ) {
      const timeout = setTimeout(() => {
        setMessages({
          ...messages,
          [chatId]: [
            ...messages[chatId],
            {
              id: nanoid(),
              autor: 'Душнила',
              value: `Привет ${
                messages[chatId][messages[chatId].length - 1].autor
              }, ты скучный!`,
              now: new Date().toLocaleTimeString().slice(0, -3),
            },
          ],
        });
      }, 1000);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [chatId, messages, setMessages]);

  const addMessage = useCallback(
    (autorValue: string, messageValue: string) => {
      if (chatId) {
        setMessages((prevMessage) => ({
          ...prevMessage,
          [chatId]: [
            ...prevMessage[chatId],
            {
              id: nanoid(),
              autor: autorValue,
              value: messageValue,
              now: new Date().toLocaleTimeString().slice(0, -3),
            },
          ],
        }));
      }
    },
    [chatId, setMessages]
  );

  if (!chatList.find((chat) => chat.name === chatId)) {
    return <Navigate replace to="/chats" />;
  }

  return (
    <div className="chat-home-wrp ">
      <ChatList
        chatList={chatList}
        onAddChat={onAddChat}
        onDeleteChat={onDeleteChat}
      />
      <div className="chats-wrp">
        <MessageList messages={chatId ? messages[chatId] : []} />
        <MessageForm addMessage={addMessage} />
      </div>
    </div>
  );
};
