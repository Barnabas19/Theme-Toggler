//ENTRY POINT

import React from 'react';
import ReactDOM from 'react-dom';
import AppLogic from './AppLogic';
import App from './App';
import Preload from './Preload';
import reportWebVitals from './reportWebVitals';
import PreloadLogic from './PreloadLogic';


ReactDOM.render(
  <React.StrictMode>
    <Preload />
  </React.StrictMode>,
  document.getElementById('root')
)
PreloadLogic();


const render = ()=>{
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );
  AppLogic();
}

//Asynchronous rendering
setTimeout(render, 5000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();