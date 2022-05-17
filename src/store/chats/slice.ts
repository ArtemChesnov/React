import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { Message, MessageState } from './types';

export interface ChatState {
  [key: string]: MessageState[];
}

const initialState: ChatState = {
  gb: [
    {
      id: '1',
      author: 'GeekBrains',
      value: 'Hello, I`m geekbrains',
      now: new Date().toLocaleTimeString().slice(0, -3),
    },
  ],
};

const chatsSlice = createSlice({
  name: 'chats',
  initialState,
  reducers: {
    addChat(state, action: PayloadAction<{ name: string }>) {
      state[action.payload.name] = [];
    },
    deleteChat(state, action: PayloadAction<{ chatId: string }>) {
      delete state[action.payload.chatId];
    },
    addMessage(
      state,
      action: PayloadAction<{ chatId: string; message: Message }>
    ) {
      const { chatId } = action.payload;
      const { value, author, now } = action.payload.message;
      state[chatId].push({
        author,
        id: nanoid(),
        value,
        now,
      });
    },
  },
});

export const { addChat, deleteChat, addMessage } = chatsSlice.actions;
export const chatsReducer = chatsSlice.reducer;
