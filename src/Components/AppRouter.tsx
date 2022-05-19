import React, { FC, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutWithConnect } from 'src/pages/About';
import { Articles } from 'src/pages/Articles';
import { Error } from 'src/pages/Error';
import { Home } from 'src/pages/Home';
import { Loader } from 'src/pages/Loader';
import { Profile } from 'src/pages/Profile';
import { Header } from './CompFunc/Header';

const ChatList = React.lazy(() =>
  Promise.all([
    import('src/Components/CompFunc/ChatList').then(({ ChatList }) => ({
      default: ChatList,
    })),
    new Promise((resolve) => setTimeout(resolve, 1000)),
  ]).then(([moduleExports]) => moduleExports)
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
            <Route path="articles" element={<Articles />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
