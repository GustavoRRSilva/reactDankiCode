import React from 'react';
import './App.css';

function App(props) {
  return (
   <div className='App'>
   <h1>
    {props.texto.chamada}
   </h1>
   <p>
    {props.texto.chamada2}
   </p>
   </div>
  );
}

export default App;
