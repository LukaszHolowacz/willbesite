import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './Services.css';

const serviceList = [
  {
    icon: '💻',
    titleKey: 'webDevTitle',
    descKey: 'webDevDesc'
  },
  {
    icon: '🛒',
    titleKey: 'ecommerceTitle',
    descKey: 'ecommerceDesc'
  },
  {
    icon: '🎨',
    titleKey: 'designTitle',
    descKey: 'designDesc'
  },
  {
    icon: '📈',
    titleKey: 'seoTitle',
    descKey: 'seoDesc'
  },
  {
    icon: '🔧',
    titleKey: 'supportTitle',
    descKey: 'supportDesc'
  }
];

const Services = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="services-section">
      <div className="services-header">
        <h1>{translations.services.heading}</h1>
        <p>{translations.services.subtext}</p>
      </div>

      <div className="services-scroll-wrapper">
        <div className="services-grid">
          {serviceList.map(({ icon, titleKey, descKey }) => (
            <div className="service-card" key={titleKey}>
              <div className="service-icon">{icon}</div>
              <h2>{translations.services[titleKey]}</h2>
              <p>{translations.services[descKey]}</p>
            </div>
          ))}
        </div>
      </div>

      <p className="services-note">{translations.services.note}</p>
    </section>
  );
};

export default Services;