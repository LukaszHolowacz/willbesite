import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Services = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="container mt-4">
      <h1>{translations.services.heading}</h1>
      <p>{translations.services.subtext}</p>
    </section>
  );
};

export default Services;
