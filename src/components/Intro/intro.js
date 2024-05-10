import React from "react";
import "./intro.css";
import { Link } from "react-scroll";
import buttonImg from "../../assets/hireme.png";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello, </span>
        <span className="introText">
          I'm <span className="introName">Olha</span>
          <br />
          Frontend Developer
        </span>
        <p className="introPara">
          I'm passionate about creating experiences that are easy to use, <br />
          accessible, and that meet the user's needs.
        </p>
        <Link>
          <button className="button">
            <img src={buttonImg} alt="button" className="buttonImg" />
            Contact me
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Intro;
