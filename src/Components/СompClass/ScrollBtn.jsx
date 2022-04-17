import React, { Component } from 'react';

export class ScrollBtn extends Component {
  scroll = () => {
    document.querySelector('main').scrollIntoView({
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <button className="scroll-btn" onClick={this.scroll}>
        Далее
      </button>
    );
  }
}
