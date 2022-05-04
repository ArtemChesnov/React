import { addChat, addMessage, deleteChat } from './actions';
import { chatReducer, ChatsState } from './reducer';
import { ChatsActions } from './types';
import 'jest-redux-thunk';

describe('chat reducer', () => {
  it('addChat action', () => {
    const action: ChatsActions = addChat('GB1');
    const state: ChatsState = {};
    const chat = chatReducer(state, action);

    expect(chat).toEqual({ GB1: [] });
  });

  it('delChat action', () => {
    const action: ChatsActions = deleteChat('gb');
    const state: ChatsState = {
      gb: [
        {
          id: '1',
          author: 'GeekBrains',
          value: 'Hello, I`m geekbrains',
          now: new Date().toLocaleTimeString().slice(0, -3),
        },
      ],
    };
    const chat = chatReducer(state, action);

    expect(chat).toEqual({});
  });

  it('addMessage action', () => {
    const action: ChatsActions = addMessage('gb', {
      value: 'Привет, ты скучный!',
      author: 'Душнила',
      now: '22-22',
    });
    const state: ChatsState = {
      gb: [
        {
          id: '1',
          author: 'GeekBrains',
          value: 'Hello, I`m geekbrains',
          now: new Date().toLocaleTimeString().slice(0, -3),
        },
      ],
    };
    const chat = chatReducer(state, action);

    expect(chat.gb.length).toBe(2);
  });
});
