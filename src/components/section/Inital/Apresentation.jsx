import React from "react";
import "./style.css";
import ButtonSocial from "../../comom/ButtonSocial/ButtonSocial";
import MeImage from '../../../assets/images/Me.svg';
import GithubImage from "../../../assets/icons/github.svg"
import LinkedinImage from "../../../assets/icons/linkedin.svg"

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
              img={GithubImage}
              name="Github"
              colorName="#00000"
            />
            <ButtonSocial
              url="https://www.linkedin.com/in/luiz-felipe-95942222b/"
              img={LinkedinImage}
              name="Linkedin"            />
          </div>
        </div>
        <img src={MeImage} alt="Luiz Felipe" id="image-me"/>
      </div>
    </section>
  );
};

export default Apresentation;
