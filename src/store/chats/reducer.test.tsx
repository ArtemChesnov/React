import { chatReducer, ChatsState } from './reducer';
import { ChatsActions } from './types';
import 'jest-redux-thunk';

describe('chat reducer', () => {
  it('addChat action', () => {
    const action: ChatsActions = { type: 'CHATS::ADD_CHAT', chatName: 'Chat' };
    const state: ChatsState = {
      gb: [
        {
          id: '1',
          author: 'GeekBrains',
          value: 'Hello, I`m geekbrains',
          now: '22-00',
        },
      ],
    };

    expect(chatReducer(state, action)).toEqual({
      Chat: [],
      gb: [
        {
          id: '1',
          author: 'GeekBrains',
          value: 'Hello, I`m geekbrains',
          now: '22-00',
        },
      ],
    });
  });

  it('delChat action', () => {
    const action: ChatsActions = {
      type: 'CHATS::DELETE_CHAT',
      chatId: 'gb',
    };
    const state: ChatsState = {
      Chat: [],
      gb: [
        {
          id: '1',
          author: 'GeekBrains',
          value: 'Hello, I`m geekbrains',
          now: '22-00',
        },
      ],
    };

    expect(chatReducer(state, action)).toEqual({ Chat: [] });
  });

  // it('reducers', () => {
  //   const state = chatReducer(undefined, {
  //     type: default,
  //   });
  //   expect(state).toEqual({
  //     gb: [
  //       {
  //         id: '1',
  //         author: 'GeekBrains',
  //         value: 'Hello, I`m geekbrains',
  //         now: new Date().toLocaleTimeString().slice(0, -3),
  //       },
  //     ],
  //   });
  // });

  it('thunk action', () => {
    const dispatchMock = jest.fn();
    dispatchMock({
      type: 'CHATS::ADD_MESSAGE',
      chatId: '1',
      message: {
        author: 'author',
        value: 'message',
        now: '22-22',
      },
    });
    expect(dispatchMock).toBeDispatchedWithActionType('CHATS::ADD_MESSAGE');
  });
});
