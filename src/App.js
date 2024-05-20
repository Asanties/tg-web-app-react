
import './App.css';
import React, { useState, useEffect } from 'react';

const tg = window.Telegram.WebApp;


function App() {

  useEffect(  () =>   {
     tg.ready();
  },   [] )

  const onClose = () =>{

    tg.close()
  }
  return (
    <div className="App">
     Work
     <button onClick = {onClose}>Close</button>
    </div>
  );
}

export default App;
