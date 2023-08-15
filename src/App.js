import React from "react";
import "./App.css";
import Menu from "./menu";
import { useState,useEffect } from "react";

function App(props) {
  const [count,setCount] = useState(0); //count é o valor inicial e sempre que for trocar tem que usar o setCount
  useEffect(() =>{
    document.title =`você clicou ${count} vezes`
  },[count]);//efeito usado p toda vez q a pagina atualiza, e com o ultimo parametro servindo para atualizar toda vez q o count mudar
  return (
    <div className="App">
      <Menu />
      <p>Você clicou {count} vezes</p>
      <button onClick={() => setCount(count + 1)}>Click me </button>
    </div>
  );
}

export default App;
