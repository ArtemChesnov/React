import { ADD_CHAT, DELETE_CHAT, ADD_MESSAGE } from './actions';
import { Reducer } from 'redux';
import { ChatsActions } from './types';
import { nanoid } from 'nanoid';

export interface Message {
  id: string;
  author: string;
  value: string;
  now: string;
}

export interface ChatsState {
  [key: string]: Message[];
}

export const initialState: ChatsState = {
  gb: [
    {
      id: '1',
      author: 'GeekBrains',
      value: 'Hello, I`m geekbrains',
      now: new Date().toLocaleTimeString().slice(0, -3),
    },
  ],
};

export const chatReducer: Reducer<ChatsState, ChatsActions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case ADD_CHAT: {
      return {
        ...state,
        [action.chatName]: [],
      };
    }
    case DELETE_CHAT: {
      const chats = { ...state };
      delete chats[action.chatId];
      return chats;
    }
    case ADD_MESSAGE: {
      return {
        ...state,
        [action.chatId]: [
          ...state[action.chatId],
          {
            id: nanoid(),
            author: action.author,
            value: action.message,
            now: new Date().toLocaleTimeString().slice(0, -3),
          },
        ],
      };
    }

    default:
      return state;
  }
};
