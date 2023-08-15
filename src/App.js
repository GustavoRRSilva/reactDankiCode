import React from "react";
import "./App.css";
import Menu from "./menu";
import { useState, useEffect } from "react";

function App(props) {
  const[segundo,setSegundo] = useState(0);
  const[minuto,setMinuto] = useState(0);
  const[hora,setHora] = useState(0);
  useEffect(() => {
    const tempo = setInterval(() => {
      setSegundo((segundo) => (segundo === 59 ? 0 : segundo + 1));
      setMinuto((minuto) => (segundo === 59 ? minuto + 1 : minuto));
      setHora((hora) => (minuto === 59 && segundo === 59 ? hora + 1 : hora));
    }, 1000);

    return () => clearInterval(tempo);
  }, []);

  return(<div>
    {segundo}:{minuto}:{hora}  
  </div>)
}
export default App;
