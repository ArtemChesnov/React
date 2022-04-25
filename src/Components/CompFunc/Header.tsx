import React, { FC } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
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
];

export const Header: FC = () => (
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
    <main>
      <Outlet />
    </main>
  </>
);
