import React, { Component } from 'react';

export class MessageInput extends Component {
  render() {
    return (
      <>
        <textarea
          type="text"
          className="message-input"
          required
          onChange={this.props.changeMessage}
          value={this.props.messageValue}
          placeholder="Напишите сообщение..."
        />
      </>
    );
  }
}
