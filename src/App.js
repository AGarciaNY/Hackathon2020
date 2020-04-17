import React from 'react';
import logo from './Icons/Virus.png';
import './App.css';
import Intro from './HomePage/Intro.js'

function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <Intro/>
    </div>
  );
}

export default App;
