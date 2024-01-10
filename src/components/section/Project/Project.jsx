import React from "react";
import MySlider from "./Slides/MySlider";
import "./style.css";

const Project = () => {
  return (
    <section className="project" id="project">
      <h2>Projetos</h2>
      <div className="container-slide">
        <MySlider />
      </div>
    </section>
  );
};

export default Project;
