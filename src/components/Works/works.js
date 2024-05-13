import React from "react";
import "./works.css";
import { FaGithub } from "react-icons/fa";

const Works = () => {
  const projects = [
    {
      name: "Gemini Chat Clone ",
      languages: ["React JS", "HTML", "CSS"],
      link: "https://github.com/olyanya/react-gemini-chat-clone",
    },
    {
      name: "Crohn.jobs App",
      languages: ["Flutter", "Dart", "Supabase"],
      link: "",
    },
    {
      name: "TO-DO List",
      languages: ["React JS", "HTML", "CSS"],
      link: "https://github.com/olyanya/react-todo-list",
    },
    {
      name: "Rating Stars (Package)",
      languages: ["Flutter", "Rive"],
      link: "https://github.com/olyanya/flutter-rating-stars",
    },
  ];
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        I take pride in paying attention to the smallest details and making sure
        that my work is pixel perfect. I'm exited to bring my skills and
        background to help businesses achive their goals.
      </span>
      <div className="worksProjects">
        {projects.map((project, index) => (
          <div key={index} className="worksBox">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <FaGithub className="githubIcon" />
            </a>
            <p className="projectName">{project.name}</p>
            <div className="languages">
              {project.languages.map((language, index) => (
                <div key={index} className="languageBox">
                  {language}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <a
        href="https://github.com/olyanya"
        target="_blank"
        rel="noopener noreferrer"
        className="worksButton"
      >
        See More
      </a>
    </section>
  );
};

export default Works;
