import React from "react";
import "./Hero.css";
import Social from "../Social/Social";
import { BsFillCloudDownloadFill } from "react-icons/bs";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero-container" id="Navbar">
      <Social />
      <div className="hero-intro">
        <div className="text">
          <span>Hello 👋</span>
          <span>I am Abhijit</span>
          <span>
            <Typewriter
              options={{
                strings: [" Developer", "Designer", "Problem Solver"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
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
        <button className="button resume">
          <BsFillCloudDownloadFill /> Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
