import React, { Component } from 'react';

interface startMessage {
  name: string;
}

export class MessageStart extends Component<startMessage> {
  render() {
    return (
      <>
        <h1>Привет!</h1>
        <h2>Меня зовут {this.props.name}.</h2>
        <h3>И это мое первое приложение на React!</h3>
        <br></br>
        <br></br>
      </>
    );
  }
}
