import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectName, selectVisible } from 'src/store/profile/selectors';
import { changeName, toggleProfile } from 'src/store/profile/actions';

export const Profile: FC = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('');

  const visible = useSelector(selectVisible);
  const name = useSelector(selectName);

  return (
    <>
      <h2>Profile</h2>
      <div>
        <p>{name}</p>
        <input type="checkbox" checked={visible} readOnly />
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
