import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App texto = {{chamada:'a danki é boa',chamada2:'mas o guguinha é melhor'}}/>
  </React.StrictMode>,
  document.getElementById('root')
);
