import React, { useState, useCallback, useRef } from 'react';
import { Button } from './Button';
import { Input } from './Input';
import '../../App.css';
import shortid from 'shortid';

export const Form = () => {
  const [name] = useState('click');
  const [value, setValue] = useState('');
  const [toDolist, setToDoList] = useState([]);
  const el = useRef();

  const handleClick = () => {
    if (!value) {
      alert('Вы должны что то написать!');
      return false;
    } else {
      setToDoList([...toDolist, value]);
      setValue('');
    }
  };

  const handleChange = useCallback((event) => {
    setValue(event.target.value);
  }, []);

  const closeItem = (event) => {
    event.target.parentElement.style.display = 'none';
  };

  const checkedItem = (event) => {
    event.target.classList.toggle('checked');
  };

  return (
    <>
      <form ref={el}>
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
      </form>
    </>
  );
};