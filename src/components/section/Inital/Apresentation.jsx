import React from "react";
import "./style.css";
import ButtonSocial from "../../comom/ButtonSocial/ButtonSocial";

const Apresentation = () => {
  return (
    <section className="apresentation" id="initial">
      <div>
        <div>
          <h1>
            Oi, Eu sou
            <br />
            <span>Luiz Felipe</span>
            <br />
            Desenvolvedor Full-stack
          </h1>
          <div className="buttonSocial">
            <ButtonSocial
              url="https://github.com/Luiz9910"
              img="icons\icons8-github-48 1.svg"
              name="Github"
              colorName="#00000"
            />
            <ButtonSocial
              url="https://www.linkedin.com/in/luiz-felipe-95942222b/"
              img="icons\icons8-linkedin-48 1.svg"
              name="Linkedin"            />
          </div>
        </div>
        <img src="/images/Me.svg" alt="Luiz Felipe" id="image-me"/>
      </div>
    </section>
  );
};

export default Apresentation;
