import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Blogs from './Pages/Blogs';
import Projects from './Pages/Projects';
import Contact from './Pages/Contact';
import Error from './Pages/Error';

const App = () => { 

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/blogs" element={<Blogs />} /> 
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
