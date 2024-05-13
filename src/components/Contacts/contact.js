import React, { useRef } from "react";
import "./contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_3r4d5gq", "template_hlk1c6e", form.current, {
        publicKey: "YGRNAu-b9ol_k53Vx",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          e.target.reset();
          alert("Email sent!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div id="contact">
      <h1 className="contactPageTitle">Contact me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss any work opportunities.
      </span>
      <form className="contactForm" ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="your_name"
        />
        <input
          type="text"
          className="email"
          placeholder="Your Email"
          name="your_email"
        />
        <textarea
          className="msg"
          name="message"
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
