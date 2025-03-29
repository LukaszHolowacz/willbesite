import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const About = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="container mt-4">
      <h1>{translations.about.heading}</h1>
      <p>{translations.about.subtext}</p>
    </section>
  );
};

export default About;
