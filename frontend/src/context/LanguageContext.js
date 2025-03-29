import React, { createContext, useState, useEffect } from 'react';
import pl from '../locales/pl.json';
import en from '../locales/en.json';
import ua from '../locales/ua.json';
import de from '../locales/de.json';
import es from '../locales/es.json';

const translations = { pl, en, ua, de, es };

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('language') || 'pl'; 
  });

  const changeLanguage = (lang) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
