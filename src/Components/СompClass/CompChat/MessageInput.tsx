import React, { Component } from 'react';

interface AutorInputProps {
  messageValue: string;
  messageChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export class MessageInput extends Component<AutorInputProps> {
  render() {
    return (
      <>
        <textarea
          className="message-input"
          required
          onChange={this.props.messageChange}
          value={this.props.messageValue}
          placeholder="Напишите сообщение..."
        />
      </>
    );
  }
}
