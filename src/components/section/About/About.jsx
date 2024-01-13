import React from "react";
import "./style.css";

const About = () => {
  return (
    <section className="about" id="sobremim">
      <div>
        <img src="images\ImageTwo.svg" alt="ImageTwo" />
        <div>
          <h2>Sobre mim</h2>
          <p>
            Sou desenvolvedor Full-Stack e desenvolvo utilizando Node, Nest
            React e Mongo para construir minhas aplicações, também tenho
            conhecimento com Express, TypeScript e MySQL. Sou capaz de criar
            soluções inovadoras e eficazes para desafios complexos, motivado por
            excelência nas atividades, comprometido com a qualidade do código e
            práticas ágeis de desenvolvimento, e busco constantemente aprimorar
            minhas habilidades técnicas para contribuir com o crescimento e
            sucesso do projeto e da equipe. Atualmente, estou estudando Java e
            SpringBoot.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
