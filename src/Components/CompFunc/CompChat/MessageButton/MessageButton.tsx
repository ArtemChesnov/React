import React, { FC } from 'react';
import './MessageButton.css';

interface ButtonProps {
  disabled: boolean;
  onClick?: () => void;
}

export const MessageButton: FC<ButtonProps> = ({ disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      className="message-button"
      id="button"
      type="submit"
      onClick={onClick}
    >
      Отправить
    </button>
  );
};
