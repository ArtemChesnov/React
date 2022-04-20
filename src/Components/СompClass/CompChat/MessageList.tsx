import React, { Component } from 'react';

interface Message {
  id: string;
  autor: string;
  value: string;
  now: string;
}

interface ListProps {
  messages: Message[];
}

export class MessageList extends Component<ListProps> {
  constructor(props: ListProps) {
    super(props);
  }
  render(): React.ReactNode {
    return (
      <div className="message-board">
        <h1 className="message-title">Чат с Душнилой</h1>
        <div className="message-chat">
          <ul className="message-list">
            {this.props.messages.map((message) => (
              <li key={message.id} className="message-item">
                <h1 className="message-autor">{message.autor}</h1>
                <p className="message-text">
                  {message.value}
                  <span className="message-time">{message.now}</span>
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
