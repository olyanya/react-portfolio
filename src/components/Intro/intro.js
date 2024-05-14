import React from "react";
import "./intro.css";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Olha</span>
          <br />
          Frontend developer
        </span>
        <p className="introPara">
          I'm passionate about creating experiences that are easy to use, <br />
          accessible, and that meet the user's needs.
        </p>
      </div>
    </section>
  );
};

export default Intro;
