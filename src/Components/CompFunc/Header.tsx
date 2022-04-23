import React, { FC } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import './Header.scss';

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
  <header>
    <ul className="header-links-list">
      {navigate.map((link) => (
        <li key={link.id}>
          <NavLink
            className="header-links-item"
            to={link.to}
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'rgba(240, 166, 202, 1)',
            })}
          >
            {link.name}
          </NavLink>
        </li>
      ))}
    </ul>

    <main>
      <Outlet />
    </main>
  </header>
);
