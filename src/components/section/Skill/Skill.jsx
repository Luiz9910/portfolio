import React from "react";
import "./style.css";

const Skill = () => {
  const skills = [
    {
      image: "images/skills/HTML.svg",
      name: "HTML",
    },
    {
      image: "images/skills/CSS.svg",
      name: "CSS",
    },
    {
      image: "images/skills/javascript.svg",
      name: "Javascript",
    },
    {
      image: "images/skills/node.svg",
      name: "Node",
    },
    {
      image: "images/skills/express.svg",
      name: "Express",
    },
    {
      image: "images/skills/nestjs.svg",
      name: "NestJs",
    },
    {
      image: "images/skills/java.svg",
      name: "Java",
    },
    {
      image: "images/skills/springboot.svg",
      name: "Spring Boot",
    },
    {
      image: "images/skills/mongo.svg",
      name: "MongoDB",
    },
    {
      image: "images/skills/mysql.svg",
      name: "MySQL",
    },
    {
      image: "images/skills/react.svg",
      name: "React",
    },
    {
      image: "images/skills/styled.svg",
      name: "Styled com",
    },
    {
      image: "images/skills/git.svg",
      name: "Git",
    },
    {
      image: "images/skills/github.svg",
      name: "Github",
    },
  ];

  return (
    <div className="skills" id="skills">
      <h2>Skills</h2>
      <ul>
        {skills &&
          skills.map((skill) => (
            <li key={skill.name}>
              <img src={skill.image} alt={skill.name} className="image-skill" />
              <span className="name-skill">{skill.name}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Skill;
