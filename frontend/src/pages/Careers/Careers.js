import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './Careers.css';

const Careers = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="careers-container">
      <div className="careers-content">
        <h1>{translations.careers.heading}</h1>
        <p>{translations.careers.subtext}</p>
      </div>
    </div>
  );
};
    
export default Careers;