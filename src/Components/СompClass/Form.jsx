import React, { Component } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import shortid from "shortid";

export class Form extends Component {
  state = {
    value: "",
    name: "click",
    toDolist: [],
  };

  handleClick = () => {
    if (!this.state.value) {
      alert("Вы должны что то написать!");
      return false;
    } else {
      this.setState({ toDolist: [...this.state.toDolist, this.state.value] });
      this.setState({ value: "" });
    }
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  closeItem = (event) => {
    event.target.parentElement.style.display = "none";
  };

  checkedItem = (event) => {
    event.target.classList.toggle("checked");
  };

  render() {
    return (
      <>
        <div className="main-form">
          <div className="form-title">
            <h1 className="toDo-title">Список дел</h1>
            <div className="form-wrp">
              <Input change={this.handleChange} value={this.state.value} />
              <Button name={this.state.name} click={this.handleClick} />
            </div>
          </div>
          <div className="toDo-basket">
            <ul className="toDo-list">
              {this.state.toDolist.map((toDolist) => (
                <li
                  key={shortid.generate()}
                  onClick={this.checkedItem}
                  className="toDo-item"
                >
                  {toDolist}
                  <span className="close" onClick={this.closeItem}>
                    &#215;
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>
    );
  }
}
