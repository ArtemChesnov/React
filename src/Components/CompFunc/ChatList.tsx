import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from './ChatList.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { addChat, deleteChat } from 'src/store/chats/actions';
import { selectChatList } from 'src/store/chats/selectors';

export const ChatList: FC = () => {
  const [name, setName] = useState('');
  const dispatch = useDispatch();
  const chatList = useSelector(
    selectChatList,
    (prev, next) => prev.length === next.length
  );
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (name) {
      dispatch(addChat(name));
      setName('');
    }
  };

  return (
    <div className={style.chats}>
      <div className={style.wrp}>
        <ul className={style.list}>
          {chatList.map((chat) => (
            <li className={style.list__item} key={chat.id}>
              <NavLink
                className={style.list__links}
                to={`/chats/${chat.name}`}
                style={({ isActive }) => ({
                  background: isActive ? 'rgba(255, 255, 255, 0.1)' : 'none',
                })}
              >
                {chat.name}
              </NavLink>
              <button
                className={style.btn}
                onClick={() => dispatch(deleteChat(chat.name))}
              >
                x
              </button>
            </li>
          ))}
        </ul>
        <h1 className={style.title}>chatlist</h1>
        <form className={style.form} onSubmit={handleSubmit}>
          <input
            className={style.form__input}
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button disabled={!name} className={style.form__btn} type="submit">
            Add chat
          </button>
        </form>
      </div>
    </div>
  );
};
