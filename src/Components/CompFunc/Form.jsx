import React, { useState } from "react";
import { Button } from "./Button";
import { Input } from "./Input";
import shortid from "shortid";

export const Form = () => {
  const [name, setName] = useState("click");
  const [value, setValue] = useState("");
  const [toDolist, setToDoList] = useState([]);

  const handleClick = () => {
    if (!value) {
      alert("Вы должны что то написать!");
      return false;
    } else {
      setToDoList([...toDolist, value]);
      setValue("");
    }
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const closeItem = (event) => {
    event.target.parentElement.style.display = "none";
  };

  const checkedItem = (event) => {
    event.target.classList.toggle("checked");
  };

  return (
    <>
      <div className="main-form">
        <div className="form-title">
          <h1 className="toDo-title">Список дел</h1>
          <div className="form-wrp">
            <Input change={handleChange} value={value} />
            <Button name={name} click={handleClick} />
          </div>
        </div>
        <div className="toDo-basket">
          <ul className="toDo-list">
            {toDolist.map((toDolist) => (
              <li
                key={shortid.generate()}
                onClick={checkedItem}
                className="toDo-item"
              >
                {toDolist}
                <span className="close" onClick={closeItem}>
                  &#215;
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
