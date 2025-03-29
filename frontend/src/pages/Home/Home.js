import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

const Home = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="container mt-4">
      <h1>{translations.home.heading}</h1>
      <p>{translations.home.subtext}</p>
    </section>
  );
};

export default Home;
