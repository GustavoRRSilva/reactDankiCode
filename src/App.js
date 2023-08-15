import React from 'react';
import './App.css';
import Menu from './menu';

function App(props) {
  return (
   <div className='App'>
   <h1>
    {props.texto.chamada}
   </h1>
   <p>
    {props.texto.chamada2}
   </p>
   <Menu/>
   </div>
  );
}

export default App;
