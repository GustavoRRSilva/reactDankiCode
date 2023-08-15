import React from "react";
import "./App.css";
import Menu from "./menu";
import { useState, useEffect } from "react";

function App(props) {
  const [count, setCount] = useState(0); //count é o valor inicial e sempre que for trocar tem que usar o setCount
  useEffect(() => {
    document.title = `você clicou ${count} vezes`;
  }, [count]); //efeito usado p toda vez q a pagina atualiza, e com o ultimo parametro servindo para atualizar toda vez q o count mudar
  const [nome, setNome] = useState("Gustavo");
  if ((nome == "Gustavo")) {
    return (
      <div className="App">
        <Menu />
        <p>Seu nome é gustavo</p>
      </div>
    );
  } else {
    return (
      <div className="App">
        <Menu />
        <p>Seu nome não é gustavo</p>
      </div>
    );
  }
}
export default App;
