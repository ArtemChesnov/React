import { profileReducer, initialState, ProfileState } from '../profile/reducer';
import { ProfileActions } from '../profile/types';

describe('profile reducer', () => {
  it('reducers', () => {
    const state = profileReducer(
      { visible: true, name: 'Artem' },
      { type: 'PROFILE::CHANGE_NAME', name: 'Artem' }
    );
    expect(state).toEqual({ visible: true, name: 'Artem' });
  });

  it('toggle reducer', () => {
    const action: ProfileActions = {
      type: 'PROFILE::TOGGLE_PROFILE',
    };

    expect(profileReducer(initialState, action)).toEqual({
      ...initialState,
      visible: false,
    });
  });

  it('name reducer', () => {
    const action: ProfileActions = {
      type: 'PROFILE::CHANGE_NAME',
      name: 'default name',
    };

    expect(profileReducer(initialState, action)).toEqual({
      ...initialState,
      name: 'default name',
    });
  });

  it('change name', () => {
    const initialState: ProfileState = {
      name: 'BOT',
      visible: true,
    };

    const action: ProfileActions = {
      type: 'PROFILE::CHANGE_NAME',
      name: 'Artem',
    };
    expect(profileReducer(initialState, action)).toEqual({
      ...initialState,
      name: action.name,
    });
  });

  it('change profile', () => {
    const initialState: ProfileState = {
      name: 'BOT',
      visible: false,
    };

    const action: ProfileActions = {
      type: 'PROFILE::TOGGLE_PROFILE',
    };

    expect(profileReducer(initialState, action)).toEqual({
      ...initialState,
      visible: true,
    });
  });
});
