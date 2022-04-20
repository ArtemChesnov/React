import React, { Component } from 'react';

interface AutorInputProps {
  autorValue: string;
  autorChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export class AutorInput extends Component<AutorInputProps> {
  render() {
    return (
      <>
        <input
          value={this.props.autorValue}
          onChange={this.props.autorChange}
          type="text"
          className="autor-input"
          placeholder="Введите ваше имя..."
          required
        />
      </>
    );
  }
}
