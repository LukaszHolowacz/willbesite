import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './About.css';

const About = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>{translations.about.heading}</h1>
          <p className="about-subtext">{translations.about.subtext}</p>
          <div className="about-description">
            <p>{translations.about.description1}</p>
            <p>{translations.about.description2}</p>
            <p>{translations.about.description3}</p>
            <p>{translations.about.description4}</p>
            <p>{translations.about.description5}</p>
          </div>
        </div>
        <div className="about-image">
          <img src="/team-photo.jpg" alt="Zespół WillBeSite" />
        </div>
      </div>
    </section>
  );
};

export default About;
