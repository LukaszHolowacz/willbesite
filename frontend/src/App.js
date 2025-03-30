import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Careers from './pages/Careers/Careers';

const App = () => {
  return (
    <LanguageProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
          </Routes>
        </Router>
    </LanguageProvider>
  );
};

export default App;
