import React, { FC } from 'react';
import './MessageButton.scss';

interface ButtonProps {
  disabled: boolean;
  onClick?: () => void;
}

export const MessageButton: FC<ButtonProps> = ({ disabled, onClick }) => {
  return (
    <button
      disabled={disabled}
      className="chat-message-button"
      id="button"
      type="submit"
      onClick={onClick}
    >
      Отправить
    </button>
  );
};
