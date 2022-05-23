import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutWithConnect } from 'src/pages/About';
// import { Chats } from 'src/pages/Chats';
import { Error } from 'src/pages/Error';
import { Home } from 'src/pages/Home';
import { Loader } from 'src/pages/Loader';
import { Profile } from 'src/pages/Profile';
// import { ChatList } from './CompFunc/ChatList';
import { Header } from './CompFunc/Header';

const ChatList = React.lazy(() =>
  import('src/Components/CompFunc/ChatList').then((module) => ({
    default: module.ChatList,
  }))
);

const Chats = React.lazy(() =>
  import('src/pages/Chats').then((module) => ({
    default: module.Chats,
  }))
);

export const AppRouter: FC = () => {
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
            <Route path="about" element={<AboutWithConnect />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
