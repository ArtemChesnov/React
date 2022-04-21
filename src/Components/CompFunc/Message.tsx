import React, { FC } from 'react';

interface startMessage {
  name: string;
}

export const Message: FC<startMessage> = (props) => {
  return (
    <>
      <h1>Привет!</h1>
      <h2>Меня зовут {props.name}.</h2>
      <h3>И это мое первое приложение на React!</h3>
      <br></br>
      <br></br>
    </>
  );
};
