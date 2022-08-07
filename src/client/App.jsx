import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Error from './Pages/Error';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkTheme from './darkTheme';
import lightTheme from './lightTheme';

const App = () => { 
  
  const theme = useSelector(state => state.theme.value);
  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <CssBaseline />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="blogs" element={<Blogs />} /> 
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
