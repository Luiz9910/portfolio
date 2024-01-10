import React, { useState } from "react";
import "./style.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header>
      <div>
        <a href="/">
          <span className="key-logo">&#123;</span>
          <p>Luiz.code</p>
          <span className="key-logo">&#125;</span>
        </a>
      </div>
      <div className={`menu-container ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <a href="#sobremim">Sobre mim</a>
          </li>
          <li>
            <a href="#project">Projetos</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
