import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileState } from 'src/store/profile/reducer';
import { changeName, toggleProfile } from '../store/profile/actions';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const visible = useSelector((state: ProfileState) => state.visible);
  const name = useSelector((state: ProfileState) => state.name);

  return (
    <>
      <h2>Profile</h2>
      <div>
        <p>{name}</p>
        <input type="checkbox" checked={visible} />
        <button onClick={() => dispatch(toggleProfile())}>click</button>
        <br />
        <input
          type="text"
          onChange={(event) => setValue(event.target.value)}
          value={value}
        />
        <button onClick={() => dispatch(changeName(value))}>change name</button>
      </div>
    </>
  );
};
