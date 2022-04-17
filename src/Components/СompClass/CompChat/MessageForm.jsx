import React, { Component } from 'react';
import { AutorInput } from './AutorInput';
import { MessageButton } from './MessageButton';
import { MessageInput } from './MessageInput';

export class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      autorValue: '',
      messageValue: '',
      message: [],
    };
  }

  clickSubmit = () => {
    this.setState({
      message: [
        ...this.state.message,
        {
          autor: this.state.autorValue,
          message: this.state.messageValue,
          now: new Date().toLocaleTimeString().slice(0, -3),
        },
      ],
    });
    this.setState({ messageValue: '' });
    this.setState({ autorValue: '' });
  };

  bot = () => {
    this.setState({
      message: [
        ...this.state.message,
        {
          autor: 'Душнила',
          message: `Привет ${
            this.state.message[this.state.message.length - 1].autor
          }, ты скучный.`,
          now: new Date().toLocaleTimeString().slice(0, -3),
        },
      ],
    });
  };

  componentDidUpdate() {
    if (
      this.state.message.length > 0 &&
      this.state.message[this.state.message.length - 1].autor !== 'Душнила'
    ) {
      this.interval = setTimeout(this.bot, 1500);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  autorChange = (event) => {
    this.setState({ autorValue: event.target.value });
  };

  messageChange = (event) => {
    this.setState({ messageValue: event.target.value });
  };

  render() {
    return (
      <div className="mesageFromUser-form">
        <div className="message-board">
          <h1 className="message-title">Чат с Душнилой</h1>
          <div className="message-chat">
            <ul className="message-list">
              {this.state.message.map((message, idx) => (
                <li key={idx} className="message-item">
                  <h1 className="message-autor">{message.autor}</h1>
                  <p className="message-text">
                    {message.message}
                    <span className="message-time">{message.now}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="message-form">
          <AutorInput
            autorValue={this.state.autorValue}
            changeName={this.autorChange}
          />
          <MessageInput
            changeMessage={this.messageChange}
            messageValue={this.state.messageValue}
          />
          <MessageButton
            disabled={!this.state.messageValue || !this.state.autorValue}
            click={this.clickSubmit}
          />
        </div>
      </div>
    );
  }
}
