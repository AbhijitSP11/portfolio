import React from "react";
import "./Hero.css";
import bg from "../../images/blue.png";
import bitmoji from "../../images/Male Memojis.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import Social from "../Social/Social";

const Hero = () => {
  return (
    <div className="hero-container" id="Navbar">
      <Social />
      <div className="hero-intro">
        <div className="text">
          <span>Hello</span>
          <span>I am Abhijit</span>
          <span>Designer and Developer </span>
          <span>
            I am Abhijit Panchal, an engineer and ocassionaly a designer. Lorem
            Ipsum is simply dummy text of the printing and typesetting industry.{" "}
            <br />
            Lorem Ipsum has been the industry's standard dummy text ever since
            the 1500s,
            <br />
            when an unknown printer took a galley of type and scrambled it to .
          </span>
        </div>
        <button className="button resume">Resume</button>
      </div>

      {/* <div className="hero-image">
        <img src={bg} alt="" />
        <img src={bitmoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv text1="Web" text2="Developer" />
        </div>
        <div style={{ top: "18rem", left: "0rem" }}>
          <FloatingDiv text1="UI" text2="Designer" />
        </div>
      </div> */}
    </div>
  );
};

export default Hero;
