import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Profile } from 'src/pages/Profile';
import { Home } from 'src/pages/Home';
import { Error } from 'src/pages/Error';
import { Header } from './Components/CompFunc/Header';
import { Loader } from 'src/pages/Loader';

const ChatList = React.lazy(() =>
  import('src/Components/CompFunc/ChatList').then((module) => ({
    default: module.ChatList,
  }))
);

const Chats = React.lazy(() =>
  import('./pages/Chats').then((module) => ({
    default: module.Chats,
  }))
);

export const App: FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />

            <Route path="chats">
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<Chats />} />
            </Route>
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
