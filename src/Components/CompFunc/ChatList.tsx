import React, { FC, useState } from 'react';
import { Chat } from '../../App';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import './ChatList.scss';

interface ChatListProps {
  chatList: Chat[];
  onAddChat: (chats: Chat) => void;
}
export const ChatList: FC<ChatListProps> = ({ chatList, onAddChat }) => {
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      onAddChat({
        id: nanoid(),
        name,
      });
      setName('');
    }
  };

  return (
    <div className="chatlist">
      <ul className="chatlist-list">
        {chatList.map((chat) => (
          <li className="chatlist-list-item" key={chat.id}>
            <NavLink
              className="chatlist-list-links"
              to={`/chats/${chat.name}`}
              style={({ isActive }) => ({
                background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'none',
              })}
            >
              {chat.name}
            </NavLink>
          </li>
        ))}
      </ul>
      <h1 className="chatlist-title">chatlist</h1>
      <form className="chatlist-form" onSubmit={handleSubmit}>
        <input
          className="chatlist-form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button disabled={!name} className="chatlist-form-btn" type="submit">
          Add chat
        </button>
      </form>
    </div>
  );
};
