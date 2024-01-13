// Header.js
import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events, animateScroll as scroll } from 'react-scroll';
import "./style.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }

    if (currentScrollY > window.prevScrollY) {
      setScrollDirection("down");
    } else {
      setScrollDirection("up");
    }

    if (scrollTimeout) {
      clearTimeout(scrollTimeout);
    }

    setScrollTimeout(setTimeout(() => {
      setScrollDirection("stop");
    }, 2000));

    window.prevScrollY = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTimeout]);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className={`header ${isScrolled ? "fixed" : ""} ${scrollDirection === "up" ? "hidden" : ""}`}>
      <div className="logo">
        <ScrollLink to="/" smooth={true} duration={500} onClick={scrollToTop}>
          <span className="key-logo">&#123;</span>
          <p>Luiz.code</p>
          <span className="key-logo">&#125;</span>
        </ScrollLink>
      </div>
      <div className={`menu-container ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <ul className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
          <li>
            <ScrollLink to="initial" smooth={true} duration={500}>Início</ScrollLink>
          </li>
          <li>
            <ScrollLink to="sobremim" smooth={true} duration={500}>Sobre mim</ScrollLink>
          </li>
          <li>
            <ScrollLink to="project" smooth={true} duration={500}>Projetos</ScrollLink>
          </li>
          <li>
            <ScrollLink to="skills" smooth={true} duration={500}>habilidades</ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" smooth={true} duration={500}>Contato</ScrollLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
