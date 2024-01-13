import React from "react";
import Slider from "react-slick";
import Slide from "./Slide.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "images/project/10.01.2024_20.11.20_REC.png",
    text: "Portfolio desenvolvido com ReactJs para apresentar meu perfil profissional, back end desenvolvido com node e express para o envio de dados de contato.",
    deployLink: "https://example.com/deploy",
    repoLink: "https://github.com/Luiz9910/portfolio.git",
  },
  {
    image: "images/project/10.01.2024_20.16.13_REC.png",
    text: `Athletes é uma inovadora aplicação de rede social destinada a atletas em busca de visibilidade e oportunidades no cenário esportivo. Desenvolvida com tecnologias de ponta, a plataforma utiliza ReactJS e Styled Components no frontend para proporcionar uma experiência de usuário envolvente. No backend, adotamos Node.js com Express, integrando também o Amazon S3 para armazenamento de mídia e o Socket.IO para um chat em tempo real.
     Nosso objetivo com Athletes vai além de destacar habilidades atléticas; buscamos criar uma comunidade global onde atletas, treinadores e olheiros possam interagir, compartilhar vídeos de jogadas e treinos, promovendo oportunidades de carreira e crescimento profissional. O projeto está em densevolvimento em fase final`,
    repoLinkBack: "https://github.com/MarceloVinicios/Athletes-Back-End/tree/develop",
    repoLinkFront: "https://github.com/MarceloVinicios/Athletes-Front-End/tree/develop"
  },
];

const MySlider = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Slide key={index} {...slide}/>
      ))}
    </Slider>
  );
};

export default MySlider;
