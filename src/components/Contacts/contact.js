import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form className="contactForm">
        <input type="text" className="name" placeholder="Your Name" />
        <input type="text" className="email" placeholder="Your Email" />
        <textarea
          className="msg"
          aname="message"
          rows="5"
          placeholder="Your message"
        ></textarea>
        <button type="submit" value="Send" className="submitButton">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
