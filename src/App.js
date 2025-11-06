import React from 'react';
import logo from './logo.svg';
import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useDarkMode } from './Context/DarkMode';
import './styles/DarkMode.css';

function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  // Test and modify the application component
  const testName = 'Test App';
  const testButton = 'Test Button';

  return (
    <ThemeProvider theme={theme}>
      <header className="App-header">
        <h1>Test Project</h1>
        <div className={`App ${darkMode ? 'dark' : ''}`}>{testName}</div>
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
  );
}

export default App;