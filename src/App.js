import React from "react";
import "./App.css";
import Menu from "./menu";
import { useState } from "react";

function App(props) {
  const [count,setCount] = useState(0); //count é o valor inicial e sempre que for trocar tem que usar o setCount
  return (
    <div className="App">
      <Menu />
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Click me </button>
    </div>
  );
}

export default App;
