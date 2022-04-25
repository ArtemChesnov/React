import React, { FC, useMemo, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from './Components/CompFunc/Header';
import { Chats } from './pages/Chats';
import { ChatList } from './Components/CompFunc/ChatList';
import { Home } from './pages/Home';
import { Profile } from './pages/Profile';
import { nanoid } from 'nanoid';
import style from './App.module.scss';

export interface Chat {
  id: string;
  name: string;
}

const initialMessage: Messages = {
  default: [
    {
      id: '1',
      author: 'GeekBrains',
      value: 'Hello, I`m geekbrains',
      now: new Date().toLocaleTimeString().slice(0, -3),
    },
  ],
};

export interface Message {
  id: string;
  author: string;
  value: string;
  now: string;
}

export interface Messages {
  [key: string]: Message[];
}

export const App: FC = () => {
  const [messages, setMessages] = useState<Messages>(initialMessage);

  const chatList = useMemo(
    () =>
      Object.entries(messages).map((chat) => ({
        id: nanoid(),
        name: chat[0],
      })),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [Object.entries(messages).length]
  );

  const onAddChat = (chat: Chat) => {
    if (!messages[chat.name]) {
      setMessages({
        ...messages,
        [chat.name]: [],
      });
    }
  };

  const onDeleteChat = (chatName: string) => {
    const newMessages: Messages = { ...messages };
    delete newMessages[chatName];

    setMessages({ ...newMessages });
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />

          <Route path="chats">
            <Route
              index
              element={
                <ChatList
                  chatList={chatList}
                  onAddChat={onAddChat}
                  onDeleteChat={onDeleteChat}
                />
              }
            />
            <Route
              path=":chatId"
              element={
                <Chats
                  messages={messages}
                  setMessages={setMessages}
                  chatList={chatList}
                  onAddChat={onAddChat}
                  onDeleteChat={onDeleteChat}
                />
              }
            />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <div className={style.err}>
              <div className={style.wrp}>
                <div className={style.circle}>
                  <h2 className={style.tittle}>404</h2>
                  <p className={style.text}>Упс...Что-то пошло не так...</p>
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};
