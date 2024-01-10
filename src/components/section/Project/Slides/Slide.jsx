import React from "react";
import "./slide.css";

const Slide = ({ image, text, deployLink, repoLink }) => {
  return (
    <div className="slide">
      <div className="image-container">
        <img src={image} alt="Slide" />
      </div>
      <div className="content">
        <p>{text}</p>
        <div className="buttons">
          {deployLink && (
            <a href={deployLink} target="_blank" rel="noopener noreferrer">
              Deploy
            </a>
          )}
          {repoLink && (
            <a href={repoLink} target="_blank" rel="noopener noreferrer">
              Repository
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Slide;
