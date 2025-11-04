import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`App ${darkMode ? 'dark' : ''}`}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={toggleDarkMode} className="toggle-button">
          {darkMode ? 'Toggle to Light Mode' : 'Toggle to Dark Mode'}
        </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* Add this line at bottom of the document */}
      {darkMode && (
        <div className="background">
          <div className="dark-text">
            You are in Dark Mode!
          </div>
          <div className="dark-text">
            This text will appear only when Dark mode is enabled!
          </div>
        </div>
      )}
    </div>
  );
}

export default App;