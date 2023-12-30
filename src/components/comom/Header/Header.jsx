import React from "react";
import "./style.css";

const Header = () => {
  return (
    <header>
      <div>
        <a href="/">
          <span className="key-logo">&#123;</span>
          <p>Luiz.code</p>
          <span className="key-logo">&#125;</span>
        </a>
      </div>
      <ul>
        <li>
          <a href="#sobremim">Sobre mim</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
        <li>
          <a href="@skills">Skills</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
