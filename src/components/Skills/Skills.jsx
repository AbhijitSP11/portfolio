import React from "react";
import "./Skills.css";
import js from "../../images/js.png";
import c from "../../images/c-.png";
import ts from "../../images/typescript.png";
import ml from "../../images/deep-learning.png";
import figma from "../../images/figma.png";
import github from "../../images/github.png";
import ux from "../../images/ux-design.png";
import react from "../../images/react.png";
import android from "../../images/android.png";
import wordpress from "../../images/wordpress-logo.png";

function Skills() {
  return (
    <div className="skills-container">
      <div>
        <img src={js} alt="about" />
        <img src={react} alt="about" />
        <img src={android} alt="about" />
        <img src={ml} alt="about" />
        <img src={wordpress} alt="about" />
        <img src={figma} alt="about" />
      </div>
      <div>
        <img src={c} alt="about" />
        <img src={ts} alt="about" />
        <img src={github} alt="about" />
        <img src={ux} alt="about" />
      </div>
    </div>
  );
}

export default Skills;
