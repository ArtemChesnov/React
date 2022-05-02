import { chatReducer, initialState } from './reducer';
import { ChatsActions } from './types';

describe('chat reducer', () => {
  it('add chat', () => {
    const state = chatReducer(
      {
        gb: [
          {
            id: '1',
            author: 'GeekBrains',
            value: 'Hello, I`m geekbrains',
            now: '22:00',
          },
        ],
      },
      { type: 'CHATS::ADD_CHAT', chatName: 'Artem' }
    );
    expect(state).toEqual({
      Artem: [],
      gb: [
        {
          author: 'GeekBrains',
          id: '1',
          now: '22:00',
          value: 'Hello, I`m geekbrains',
        },
      ],
    });
  });
});
