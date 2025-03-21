import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css';

const Navbar = () => {
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex flex-row align-items-center gap-lg-4 gap-2">
            <li className="nav-item">
              <a className="nav-link active" href="#">Strona główna</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">O nas</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Usługi</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Kontakt</a>
            </li>
            <li className="nav-item dropdown d-lg-none">
              <button
                className="nav-link dropdown-toggle language-btn w-100 text-start"
                type="button"
                id="mobileLanguageDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src="https://flagcdn.com/w40/pl.png" alt="PL" width="20" className="me-2" />
                Polski
              </button>
              <ul className="dropdown-menu" aria-labelledby="mobileLanguageDropdown">
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <img src="https://flagcdn.com/w40/pl.png" alt="PL" width="20" className="me-2" />
                    Polski
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <img src="https://flagcdn.com/w40/gb.png" alt="EN" width="20" className="me-2" />
                    English
                  </a>
                </li>
                <li>
                  <a className="dropdown-item d-flex align-items-center" href="#">
                    <img src="https://flagcdn.com/w40/ua.png" alt="UA" width="20" className="me-2" />
                    Українська
                  </a>
                </li>
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
            <img src="https://flagcdn.com/w40/pl.png" alt="PL" width="20" className="me-2" />
            Polski
          </button>
          <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="desktopLanguageDropdown">
            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <img src="https://flagcdn.com/w40/pl.png" alt="PL" width="20" className="me-2" />
                Polski
              </a>
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <img src="https://flagcdn.com/w40/gb.png" alt="EN" width="20" className="me-2" />
                English
              </a>
            </li>
            <li>
              <a className="dropdown-item d-flex align-items-center" href="#">
                <img src="https://flagcdn.com/w40/ua.png" alt="UA" width="20" className="me-2" />
                Українська
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
