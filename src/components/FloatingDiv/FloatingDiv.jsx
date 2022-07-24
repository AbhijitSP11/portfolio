import "./FloatingDiv.css";

import React from "react";

const FloatingDiv = (props) => {
  return (
    <div className="floating-div">
      <img src=" " alt="" />
      <span>
        {props.text1}
        <br />
        {props.text2}
      </span>
    </div>
  );
};

export default FloatingDiv;
