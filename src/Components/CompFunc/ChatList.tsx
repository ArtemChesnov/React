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
    <div className="chat">
      <ul className="chat-list">
        {chatList.map((chat) => (
          <li className="chat-list-item" key={chat.id}>
            <NavLink
              className="chat-list-links"
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
      <h1 className="chat-title">chatlist</h1>
      <form className="chat-form" onSubmit={handleSubmit}>
        <input
          className="chat-form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button disabled={!name} className="chat-form-btn" type="submit">
          Add chat
        </button>
      </form>
    </div>
  );
};
