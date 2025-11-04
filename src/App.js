import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useContext } from 'react';

const DarkModeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Test and modify the application component
  const testName = 'Test App';
  const testButton = 'Test Button';

  return (
    <DarkModeContext.Provider value={darkMode}>
      <ThemeProvider theme={theme}>
        <div className={`App ${darkMode ? 'dark' : ''}`}>{testName}</div>
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
      </ThemeProvider>
    </DarkModeContext.Provider>
  );
}

function useDarkMode() {
  const darkMode = useContext(DarkModeContext);
  return darkMode;
}

function AppWrapper() {
  return (
    <DarkModeContext.Provider value={useDarkMode()}>
      <App />
    </DarkModeContext.Provider>
  );
}

export default AppWrapper;