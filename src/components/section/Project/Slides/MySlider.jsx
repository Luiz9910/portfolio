// MySlider.js
import React from "react";
import Slider from "react-slick";
import Slide from "./Slide.jsx";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "src/assets/images/project/10.01.2024_20.11.20_REC.png",
    text: "Portfolio desenvolvido com ReactJs para apresentar meu perfil profissional, back end desenvolvido com node e express para o envio de dados de contato.",
    deployLink: "https://example.com/deploy",
    repoLink: "https://github.com/example/repo",
  },
  {
    image: "src/assets/images/ImageOne.svg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    deployLink: "https://example.com/deploy",
    repoLink: "https://github.com/example/repo",
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
        <Slide key={index} {...slide} />
      ))}
    </Slider>
  );
};

export default MySlider;
