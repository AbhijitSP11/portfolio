import React from "react";
import "./Footer.css";
import { AiOutlineBehance } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/abhijit-panchal/">
          <AiOutlineLinkedin size={26} />
        </a>
        <a href="https://github.com/abhi-j/">
          <GoMarkGithub size={22} />
        </a>
        <a href="https://www.behance.net/abhijitpanchal">
          <AiOutlineBehance size={26} />
        </a>
        <a href="https://www.behance.net/abhijitpanchal">
          <FiTwitter size={22} />
        </a>
      </div>
      <h5>©️ Copyright 2022 - Designed and Developed by Abhijit Panchal.</h5>
    </div>
  );
}

export default Footer;
