import React from 'react';
import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
        Our mission is to empower innovators in heavily regulated industries to bring about radical breakthroughs for the benefit of society. 
        </p>
        <a
          className="App-link"
          href="https://auditdeploy.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>
  );
}

export default App;
