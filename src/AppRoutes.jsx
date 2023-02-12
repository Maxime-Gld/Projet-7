import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Housing from './pages/Housing/Housing';
import About from './pages/About/About';
import Error from './pages/Error/Error';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/housing/:id" element={<Housing />} />
      <Route path="/about" element={<About />} />

      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default AppRoutes;
