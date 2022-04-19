import React, { FC } from 'react';
import './AutorInput.scss';

interface AutorInputProps {
  autorValue: string;
  setAutorValue: (event: string) => void;
}

export const AutorInput: FC<AutorInputProps> = ({
  autorValue,
  setAutorValue,
}) => {
  return (
    <input
      value={autorValue}
      onChange={(event) => {
        setAutorValue(event.target.value);
      }}
      type="text"
      className="autor-input"
      required
      placeholder="Введите ваше имя..."
    />
  );
};
