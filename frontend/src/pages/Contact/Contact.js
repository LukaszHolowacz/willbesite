import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Contact = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="container mt-4">
      <h1>{translations.contact.heading}</h1>
      <p>{translations.contact.subtext}</p>
    </section>
  );
};

export default Contact;
