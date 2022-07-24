import React, { useState } from "react";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../../data/portfolioData";
import "./Portfolio.css";

const Portfolio = () => {
  const [filter, setFilter] = useState("Design");
  const [data, setData] = useState(
    portfolioData.filter((item) => item.category === filter)
  );

  const active = `tab__btn__active`;

  const handleOnClick = (category) => {
    setFilter(category);
    setData(portfolioData.filter((item) => item.category === filter));
  };

  return (
    <div id="Projects" className="portfolio_items_container">
      <div>
        <div subtitle="My portfolio" />
        <h4 className="mt-4">Some of my distinguished works</h4>
      </div>

      <div>
        <div className={`tab_btns`}>
          <button
            className={` ${
              filter === "Design" ? active : ""
            } secondary__btn btn-block`}
            onClick={handleOnClick.bind(this, "Design")}
          >
            Mobile App
          </button>
          <button
            className={`${
              filter === "Development" ? active : ""
            } secondary__btn btn-block`}
            onClick={handleOnClick.bind(this, "Development")}
          >
            Web Design
          </button>
        </div>
      </div>

      <div className="grids">
        <div className="grid_container_1">
          {data?.map((item, index) => (
            <PortfolioItem item={item} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
