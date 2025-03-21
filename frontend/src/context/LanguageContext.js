import React, { createContext, useState } from 'react';
import pl from '../locales/pl.json';
import en from '../locales/en.json';
import ua from '../locales/ua.json';

const translations = { pl, en, ua };

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pl');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  );
};
