import React, { FC, Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutWithConnect } from 'src/pages/About';
import { Articles } from 'src/pages/Articles';
import { Error } from 'src/pages/Error';
import { Home } from 'src/pages/Home';
import { Loader } from 'src/pages/Loader';
import { Profile } from 'src/pages/Profile';
import { SignIn } from 'src/pages/SignIn';
import { SignUp } from 'src/pages/SignUp';
import { auth } from 'src/services/firebase';
import { changeAuth } from 'src/store/profile/slice';
import { Header } from './CompFunc/Header';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

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
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      console.log('user', user);
      if (user) {
        dispatch(changeAuth(true));
      } else {
        dispatch(changeAuth(false));
      }
    });
  }, []);

  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="profile" element={<Profile />} />
            <Route path="chats" element={<PrivateRoute />}>
              <Route index element={<ChatList />} />
              <Route path=":chatId" element={<Chats />} />
            </Route>
            <Route path="about" element={<AboutWithConnect />} />
            <Route path="articles" element={<Articles />} />
            <Route
              path="signin"
              element={<PublicRoute component={<SignIn />} />}
            />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
