import { chatReducer, ChatsState } from './reducer';
import { ChatsActions } from './types';

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

  // it('delChat action', () => {
  //   const action: ChatsActions = {
  //     type: 'CHATS::DELETE_CHAT',
  //     chatId: 'gb',
  //   };
  //   const state: ChatsState = {
  //     Chat: [],
  //     gb: [
  //       {
  //         id: '1',
  //         author: 'GeekBrains',
  //         value: 'Hello, I`m geekbrains',
  //         now: '22-00',
  //       },
  //     ],
  //   };

  //   expect(chatReducer(state, action)).toEqual({ Chat: [] });
  // });

  // test('reducers', () => {
  //   let state;
  //   state = reducers(undefined, {});
  //   expect(state).toEqual({
  //     profile: { visible: true, name: 'default name' },
  //     chats: {
  //       gb: [
  //         {
  //           id: '1',
  //           author: 'GeekBrains',
  //           value: 'Hello, I`m geekbrains',
  //           now: '00:06',
  //         },
  //       ],
  //     },
  //   });
  // });

  // it('addMessage action', () => {
  //   const action: ChatsActions = {
  //     type: 'CHATS::ADD_MESSAGE',
  //     chatId: '1',
  //     message: {
  //       id: '1',
  //       author: 'author',
  //       value: 'message',
  //       now: '22-22',
  //     },
  //   };

  //   const state = {
  //     gb: [
  //       {
  //         id: '1',
  //         author: 'GeekBrains',
  //         value: 'Hello, I`m geekbrains',
  //         now: '22-12',
  //       },
  //     ],
  //   };

  //   expect(chatReducer(state, action)).toBe({});
  // });
});
