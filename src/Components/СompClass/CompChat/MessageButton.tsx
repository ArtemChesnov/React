import React, { Component } from 'react';

interface ButtonProps {
  disabled: boolean;
  onClick?: () => void;
}

export class MessageButton extends Component<ButtonProps> {
  render() {
    return (
      <button
        disabled={this.props.disabled}
        onClick={this.props.onClick}
        className="message-button"
      >
        Отправить
      </button>
    );
  }
}
