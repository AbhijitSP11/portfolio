import React from "react";
import "./About.css";
import bg from "../../images/blue.png";
import bitmoji from "../../images/Male Memojis.png";
import Skills from "../Skills/Skills";

function About() {
  return (
    <div className="about-container" id="About">
      <div className="about-intro">
        <div className="about-text">
          <span> About Me</span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
            <br />
            and scrambled it to make a type specimen book. It has survived not
            <br />
            only five centuries, but also the leap into electronic typesetting,
            <br />
            remaining essentially unchanged.
          </span>
          <br />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            <br />
            industry. Lorem Ipsum has been the industry's standard dummy text
            <br />
            ever since the 1500s, when an unknown printer took a galley of type
          </span>
        </div>
        <Skills />
      </div>
    </div>
  );
}

export default About;
