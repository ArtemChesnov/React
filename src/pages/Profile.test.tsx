import { profileReducer, ProfileState } from '../store/profile/reducer';
import { ProfileActions, ToggleProfile } from '../store/profile/types';
import { changeName, toggleProfile } from '../store/profile/actions';

it('toggle reducer', () => {
  const action: ProfileActions = changeName('Artem');
  const state: ProfileState = { visible: true, name: 'default name' };
  const nameChange = profileReducer(state, action);

  expect(nameChange.name).toBe('Artem');
});

it('toggle reducer', () => {
  const action: ToggleProfile = toggleProfile();
  const state: ProfileState = { visible: true, name: 'default name' };
  const toggle = profileReducer(state, action);

  expect(toggle.visible).toBe(false);
});
