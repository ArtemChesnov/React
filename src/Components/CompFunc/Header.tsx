import React, { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, NavLink, Link } from 'react-router-dom';
import { logOut } from 'src/services/firebase';
import { selectAuth } from 'src/store/profile/selectors';
import style from './Header.module.scss';

const navigate = [
  {
    id: 1,
    to: '/',
    name: 'Home',
  },
  {
    id: 2,
    to: '/profile',
    name: 'Profile',
  },
  {
    id: 3,
    to: '/chats',
    name: 'Chats',
  },
  {
    id: 4,
    to: '/about',
    name: 'About',
  },
  {
    id: 5,
    to: '/articles',
    name: 'Articles',
  },
];

export const Header: FC = () => {
  const auth = useSelector(selectAuth);
  const [error, setError] = useState('');

  const handleSignOut = async () => {
    setError('');
    try {
      await logOut();
    } catch (err) {
      setError((err as Error).message);
    }
  };

  return (
    <>
      <header>
        <ul className={style.links}>
          {navigate.map((link) => (
            <li key={link.id}>
              <NavLink
                className={({ isActive }) =>
                  isActive ? style.active : style.none
                }
                to={link.to}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </header>
      {auth ? (
        <button onClick={handleSignOut}>logout</button>
      ) : (
        <>
          <Link to="/signin">SignIn</Link> | <Link to="/signup">SignUp</Link>
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
      )}
      <main>
        <Outlet />
      </main>
    </>
  );
};
