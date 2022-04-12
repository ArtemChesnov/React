import React, { Component } from 'react';

export class Button extends Component {
  render() {
    return (
      <button className="form-btn" onClick={this.props.click}>
        Добавить
      </button>
    );
  }
}
