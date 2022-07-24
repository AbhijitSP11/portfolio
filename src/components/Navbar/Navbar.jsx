import React from "react";
import "./Navbar.css";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <div className="logo">
        <div className="name">Abhijit</div>
      </div>
      <div className="nav-links">
        <div className="nav-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to="Navbar"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to="About" smooth={true} activeClass="activeClass">
              <li>About</li>
            </Link>
            <Link
              spy={true}
              to="Experience"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Experience</li>
            </Link>
            <Link
              spy={true}
              to="Projects"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Projects</li>
            </Link>
            <Link
              spy={true}
              to="Contact"
              smooth={true}
              activeClass="activeClass"
            >
              <li>Contact</li>
            </Link>
          </ul>
        </div>
        <button style={{ marginRight: "3.5rem" }} className="button">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Navbar;
