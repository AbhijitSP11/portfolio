import React from "react";
import "./Projects.css";
import website from "../../images/ss.png";

function Projects() {
  return (
    <div className="projects-container">
      <div className="projects-header">
        <span>Projects</span>
      </div>
      <div className="projects-component">
        <div className="project-image">
          <img src={website} alt="" />
        </div>
        <div className="project-desc">
          <span>Description</span>
          <br />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </span>
          <div className="tech-stack">
            <span>React</span>
            <span>BootStrap</span>
            <span>Music Player</span>
            <span>Spotify API</span>
          </div>
          <div className="social-link">
            <span>Github</span>
            <span>Demo</span>
          </div>
        </div>
      </div>

      <div className="projects-component">
        <div className="project-desc">
          <span>Description</span>
          <br />
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </span>
          <span>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </span>
          <div className="tech-stack">
            <span>React</span>
            <span>BootStrap</span>
            <span>Music Player</span>
            <span>Spotify API</span>
          </div>
          <div className="social-link">
            <span>Github</span>
            <span>Demo</span>
          </div>
        </div>
        <div className="project-image">
          <img src={website} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Projects;
