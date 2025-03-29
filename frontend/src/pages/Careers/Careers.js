import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { LanguageContext } from '../../context/LanguageContext';
import './Careers.css';

const Careers = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <div className="careers-container">
      <div className="careers-content">
        <h1>{translations.careers.heading}</h1>
        <p>{translations.careers.subtext}</p>

        <div className="careers-icons">
          <div>
            👨‍💻<span>Frontend</span>
          </div>
          <div>
            🧠<span>UX/UI</span>
          </div>
          <div>
            🛠️<span>Backend</span>
          </div>
          <div>
            📣<span>Marketing</span>
          </div>
          <div>
            🧪<span>Tester</span>
          </div>
        </div>

        <Link to="/contact" className="apply-btn">
            {translations.careers.button}
        </Link>
      </div>
    </div>
  );
};

export default Careers;
