import { addChat, deleteChat } from './actions';
import { chatReducer, ChatsState } from './reducer';
import { ChatsActions } from './types';

describe('chat reducer', () => {
  it('addChat action', () => {
    const action: ChatsActions = addChat('Artem');
    const state: ChatsState = {};
    const chat = chatReducer(state, action);

    expect(chat).toStrictEqual({ Artem: [] });
  });
});
