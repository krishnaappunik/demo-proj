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
        <Box component="div"> <!-- Modified this line -->
          <App />
        </Box>
      </ThemeProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default App;