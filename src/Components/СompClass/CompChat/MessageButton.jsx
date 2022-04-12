import React, { Component } from 'react';

export class MessageButton extends Component {
  render() {
    return (
      <button onClick={this.props.click} className="message-button">
        Отправить
      </button>
    );
  }
}
