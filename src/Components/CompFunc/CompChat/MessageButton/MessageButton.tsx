import React, { FC } from 'react';
import style from './MessageButton.module.scss';

interface ButtonProps {
  disabled: boolean;
  onClick?: () => void;
}

export const MessageButton: FC<ButtonProps> = ({ disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      className={style.message__button}
      id="button"
      type="submit"
      onClick={onClick}
    >
      Отправить
    </button>
  );
};
