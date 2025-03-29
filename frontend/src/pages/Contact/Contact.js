import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import './Contact.css';

const Contact = () => {
  const { translations } = useContext(LanguageContext);

  return (
    <section className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h1>{translations.contact.heading}</h1>
          <p>{translations.contact.subtext}</p>
        </div>

        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">{translations.contact.nameLabel}</label>
            <input type="text" id="name" placeholder={translations.contact.namePlaceholder} />
          </div>

          <div className="form-group">
            <label htmlFor="email">{translations.contact.emailLabel}</label>
            <input type="email" id="email" placeholder={translations.contact.emailPlaceholder} />
          </div>

          <div className="form-group">
            <label htmlFor="message">{translations.contact.messageLabel}</label>
            <textarea id="message" rows="5" placeholder={translations.contact.messagePlaceholder}></textarea>
          </div>

          <button type="submit" className="submit-btn">
            {translations.contact.submitButton}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
