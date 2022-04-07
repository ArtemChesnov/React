import React, { Component } from "react";

export class Input extends Component {
  render() {
    return (
      <div className="form-box">
        <input
          type="input"
          className="form-input"
          required
          value={this.props.value}
          onChange={this.props.change}
        />
        <label htmlFor="name" className="form-label">
          Название...
        </label>
      </div>
    );
  }
}
