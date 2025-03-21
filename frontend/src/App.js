import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <LanguageProvider>
      <Navbar />
    </LanguageProvider>
  );
};

export default App;
