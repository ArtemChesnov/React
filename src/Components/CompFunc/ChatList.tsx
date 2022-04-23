import React, { FC, useState } from 'react';
import { Chat } from '../../App';
import { NavLink } from 'react-router-dom';
import { nanoid } from 'nanoid';
import './ChatList.scss';

interface ChatListProps {
  chatList: Chat[];
  onAddChat: (chats: Chat) => void;
  onDeleteChat: (chatName: string) => void;
}
export const ChatList: FC<ChatListProps> = ({
  chatList,
  onAddChat,
  onDeleteChat,
}) => {
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
    <div className="chats">
      <ul className="chats-list">
        {chatList.map((chat) => (
          <li className="chats-list-item" key={chat.id}>
            <NavLink
              className="chats-list-links"
              to={`/chats/${chat.name}`}
              style={({ isActive }) => ({
                background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'none',
              })}
            >
              {chat.name}
            </NavLink>
            <button
              className="chats-delete-btn"
              onClick={() => onDeleteChat(chat.name)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
      <h1 className="chats-title">chatlist</h1>
      <form className="chats-form" onSubmit={handleSubmit}>
        <input
          className="chats-form-input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button disabled={!name} className="chats-form-btn" type="submit">
          Add chat
        </button>
      </form>
    </div>
  );
};
