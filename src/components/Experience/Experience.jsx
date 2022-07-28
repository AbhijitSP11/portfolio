import React from "react";
import "./Experience.css";
import { useState } from "react";
import data from "../../data/Experience";
import ExperienceItem from "./ExperienceItem";

function Experience() {
  const [filter, setFilter] = useState("Design Therapist");
  const [experience, setExperience] = useState(
    data.filter((item) => item.company === filter)
  );

  const handleOnClick = (company) => {
    setFilter(company);
    setExperience(data.filter((item) => item.company === filter));
  };

  return (
    <div className="ex-container" id="Experience">
      <span>Experience</span>
      <div className="experience__item__container">
        <div className="vl"></div>
        <div className="experience__list scroll">
          <button
            className="btn btn-1"
            onClick={handleOnClick.bind(this, "Design Therapist")}
          >
            Design Therapist
          </button>
          <br />
          <button
            className="btn btn-2"
            onClick={handleOnClick.bind(this, "Think Real Sol")}
          >
            Think Real Sol.
          </button>
          <br />
          <button
            className="btn btn-3"
            onClick={handleOnClick.bind(this, "TopTrove NGO")}
          >
            TopTrove NGO
          </button>
          <br />
          <button
            className="btn btn-4"
            onClick={handleOnClick.bind(this, "D-Garage")}
          >
            D-Garage
          </button>
          <br />
        </div>
        {experience?.map((item, index) => (
          <ExperienceItem item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Experience;
