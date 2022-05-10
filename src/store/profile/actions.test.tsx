import { profileReducer, ProfileState } from '../profile/reducer';
import { ProfileActions, ToggleProfile } from '../profile/types';
import { changeName, toggleProfile } from '../profile/actions';

describe('post reducer', () => {
  it('toggle action', () => {
    const action: ProfileActions = changeName('Artem');
    const state: ProfileState = { visible: true, name: 'default name' };
    const nameChange = profileReducer(state, action);

    expect(nameChange.name).toBe('Artem');
  });

  it('name action', () => {
    const action: ToggleProfile = toggleProfile();
    const state: ProfileState = { visible: true, name: 'default name' };
    const toggle = profileReducer(state, action);

    expect(toggle.visible).toBe(false);
  });
});
