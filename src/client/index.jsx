import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from './App';
import NavBar from './Components/NavBar';
import { BrowserRouter as Router } from 'react-router-dom';

const container = document.getElementById('root');
createRoot(container).render(
  <StrictMode>
    <Router>
      <NavBar />
      <App />
    </Router>
  </StrictMode>
);
