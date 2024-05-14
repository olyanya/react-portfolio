import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="leftSection">© {currentYear} Olha Horshkova</div>
      <div className="rightSection">
        <a href="olga.horshkova@gmail.com" className="footerIcon">
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/olyanya"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIcon"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/olha-horshkova/"
          target="_blank"
          rel="noopener noreferrer"
          className="footerIcon"
        >
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
