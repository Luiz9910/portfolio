import React from "react";
import "./style.css";
import ButtonSocial from "../../comom/ButtonSocial/ButtonSocial";

const Apresentation = () => {
  return (
    <section>
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
            <ButtonSocial />
            <ButtonSocial />
          </div>
        </div>
        <div>
          <img src="src\assets\images\ImageOne.svg" alt="Luiz Felipe" />
        </div>
      </div>
    </section>
  );
};

export default Apresentation;
