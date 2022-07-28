import React from "react";
import "./PortfolioItem.css";

import { FiExternalLink } from "react-icons/fi";
import { GoMarkGithub } from "react-icons/go";
import { motion } from "framer-motion";

function PortfolioItem(props) {
  const { title, image } = props.item;
  return (
    <motion.div
      whileHover={{
        marginTop: "-1rem",
        fontColor: "#655aff",
      }}
      className="portfolio-container"
    >
      <div className="portfolio-header">
        <span>{title}</span>
        <div className="portfolio__links">
          <a href="http://">
            <GoMarkGithub size={20} />
          </a>
          <a href="http://">
            <FiExternalLink size={22} />
          </a>
        </div>
      </div>
      <div className="portfolio__img">
        <img src={image} alt="" />
      </div>
    </motion.div>
  );
}

export default PortfolioItem;
