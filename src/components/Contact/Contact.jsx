import React, { useState } from "react";
import "./Contact.css";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yqex7nm",
        "template_c1shheg",
        form.current,
        "Ab2wnTaMz6dX0YOWC"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-container" id="Contact">
      <div className="header">
        <span>Get in Touch</span>
        <span>Have a question</span>
        <span>I am here to help you</span>
        <span>Email me at</span>
        <span>abhijit.panchal2406@gmail.com</span>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex-container">
          <input
            type="text"
            name="user_name"
            placeholder="Name"
            className="contact-form"
            style={{ color: "white" }}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="contact-form"
          />
        </div>
        <div className="message">
          <textarea
            name="message"
            placeholder="Message"
            className="contact-form-msg"
            style={{ color: "white" }}
          />
        </div>
        <input type="submit" value="Submit" className="button btn-submit" />
        <span>{done && "Thanks for contacting me!"}</span>
      </form>
    </div>
  );
}

export default Contact;
