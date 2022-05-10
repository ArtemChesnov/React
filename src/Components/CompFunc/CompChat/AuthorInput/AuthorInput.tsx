import React, { FC } from 'react';
import style from './AuthorInput.module.scss';

interface AuthorInputProps {
  authorValue: string;
  setAuthorValue: (event: string) => void;
}

export const AuthorInput: FC<AuthorInputProps> = ({
  authorValue,
  setAuthorValue,
}) => {
  return (
    <input
      value={authorValue}
      onChange={(event) => {
        setAuthorValue(event.target.value);
      }}
      type="text"
      className={style.autor__input}
      required
      placeholder="Введите ваше имя..."
    />
  );
};
