import React, { Component } from 'react';

export class AutorInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autor: '',
    };
  }

  render() {
    return (
      <>
        <input
          value={this.props.autorValue}
          onChange={this.props.changeName}
          type="text"
          className="autor-input"
          placeholder="Введите ваше имя..."
          required
        />
      </>
    );
  }
}
