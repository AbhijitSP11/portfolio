import React from "react";
import "./Social.css";
import { AiOutlineBehance } from "react-icons/ai";
import { GoMarkGithub } from "react-icons/go";
import { FiTwitter } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
function Social() {
  return (
    <div className="social-container">
      <div className="s-icons">
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
        <div className="hl"></div>
      </div>
    </div>
  );
}

export default Social;
