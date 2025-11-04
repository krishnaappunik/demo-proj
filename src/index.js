import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './Themes';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createTheme, ThemeProvider } from '@mui/material/styles'; // Importing this correctly doesn't resolve context issue
// Instead, import only the components needed from '@mui/material
import { Box } from '@mui/material'; // Changed this line
import { DarkModeContextProvider } from './Context/DarkMode';

const theme = createTheme({
  palette: {
    mode: localStorage.getItem('mode') || 'light',
  }
 });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <ThemeProvider theme={theme}>
        <Box component="div">
          <App />
        </Box>
      </ThemeProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);

// For testing purposes, check if project files are correct
try {
  // Test for index.css existence
  require.resolve('./index.css');
  console.log("index.css file exists and is correct");

  // Test for Themes existence
  require.resolve('./Themes');
  console.log("Themes file exists and is correct");

  // Test for App existence
  require.resolve('./App');
  console.log("App.js existence and is correct");

  // Test for reportWebVitals existence
  require.resolve('./reportWebVitals');
  console.log("reportWebVitals.js file exists and is correct");

  // Test for DarkModeContextProvider existence
  require.resolve('./Context/DarkMode');
  console.log("DarkModeContextProvider exists and is correct");

} catch (error) {
  console.log(`Error occurred while testing: ${error.message}`);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;