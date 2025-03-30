import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';

import About from '../About/About'; 
import Services from '../Services/Services';
import Contact from '../Contact/Contact';
import Careers from '../Careers/Careers';

const Home = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="container mt-4">
      <About />
      <Services />
      <Contact />
    </section>
  );
};

export default Home;
