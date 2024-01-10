import React from "react";
import "./style.css";

const Skill = () => {
  const skills = [
    {
      image: "src/assets/images/skills/HTML.svg",
      name: "HTML",
    },
    {
      image: "src/assets/images/skills/CSS.svg",
      name: "CSS",
    },
    {
      image: "src/assets/images/skills/javascript.svg",
      name: "Javascript",
    },
    {
      image: "src/assets/images/skills/node.svg",
      name: "Node",
    },
    {
      image: "src/assets/images/skills/express.svg",
      name: "Express",
    },
    {
      image: "src/assets/images/skills/nestjs.svg",
      name: "NestJs",
    },
    {
      image: "src/assets/images/skills/java.svg",
      name: "Java",
    },
    {
      image: "src/assets/images/skills/springboot.svg",
      name: "Spring Boot",
    },
    {
      image: "src/assets/images/skills/mongo.svg",
      name: "MongoDB",
    },
    {
      image: "src/assets/images/skills/mysql.svg",
      name: "MySQL",
    },
    {
      image: "src/assets/images/skills/react.svg",
      name: "React",
    },
    {
      image: "src/assets/images/skills/styled.svg",
      name: "Styled com",
    },
    {
      image: "src/assets/images/skills/git.svg",
      name: "Git",
    },
    {
      image: "src/assets/images/skills/github.svg",
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
