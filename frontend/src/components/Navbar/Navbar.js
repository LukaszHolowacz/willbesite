import React, { useContext } from 'react';
import { LanguageContext } from '../../context/LanguageContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const flagIcons = {
  pl: "https://flagcdn.com/w40/pl.png",
  en: "https://flagcdn.com/w40/gb.png",
  de: "https://flagcdn.com/w40/de.png",
  es: "https://flagcdn.com/w40/es.png",
  ua: "https://flagcdn.com/w40/ua.png"
};

const languageNames = {
  pl: "Polski",
  en: "English",
  de: "Deutsch",
  es: "Español",
  ua: "Українська"
};

const Navbar = () => {
  const { language, changeLanguage, translations } = useContext(LanguageContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white px-3">
      <div className="container-fluid">
        <h1 className="navbar-brand mb-0">WillBeSite</h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-column flex-lg-row align-items-start align-items-lg-center gap-lg-4 gap-2">
            <li className="nav-item">
              <a className="nav-link" href="/">{translations.navbar.home}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{translations.navbar.about}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/services">{translations.navbar.services}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">{translations.navbar.contact}</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/careers">{translations.navbar.careers}</a>
            </li>

            <li className="nav-item dropdown d-lg-none">
              <button
                className="nav-link dropdown-toggle language-btn w-100 text-start"
                type="button"
                id="mobileLanguageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={flagIcons[language]} alt={language.toUpperCase()} width="20" className="me-2" />
                {languageNames[language]}
              </button>
              <ul className="dropdown-menu" aria-labelledby="mobileLanguageDropdown">
                {Object.keys(flagIcons).map((lang) => (
                  <li key={lang}>
                    <button className="dropdown-item d-flex align-items-center" onClick={() => changeLanguage(lang)}>
                      <img src={flagIcons[lang]} alt={lang.toUpperCase()} width="20" className="me-2" />
                      {languageNames[lang]}
                    </button>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>

        <div className="dropdown d-none d-lg-block">
          <button
            className="dropdown-toggle language-btn"
            type="button"
            id="desktopLanguageDropdown"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img src={flagIcons[language]} alt={language.toUpperCase()} width="20" className="me-2" />
            {languageNames[language]}
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="desktopLanguageDropdown">
            {Object.keys(flagIcons).map((lang) => (
              <li key={lang}>
                <button className="dropdown-item d-flex align-items-center" onClick={() => changeLanguage(lang)}>
                  <img src={flagIcons[lang]} alt={lang.toUpperCase()} width="20" className="me-2" />
                  {languageNames[lang]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
