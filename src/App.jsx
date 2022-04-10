import React from "react";
import "./App.css";
import {Form} from "./Components/CompFunc/Form";
import {Message} from "./Components/CompFunc/Message";
import {ScrollBtn} from "./Components/CompFunc/ScrollBtn";

const myName = "Артём Чеснов";

export const App = () => {
  return (
    <>
      <div className="App">
        <header className="App-header">
          <Message name={myName} />
          <ScrollBtn />
        </header>
        <main className="App-main">
          <Form />
        </main>
      </div>
    </>
  );
};
