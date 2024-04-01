import React from "react";
import "./LearnMoreButton.css";

const LearnMoreButton = () => {
  return (
    <button className="cta">
      <span>Learn More</span>
      <svg viewBox="0 0 13 10" height="10px" width="15px">
        <path d="M1,5 L11,5"></path>
        <polyline points="8 1 12 5 8 9"></polyline>
      </svg>
    </button>
  );
};

export default LearnMoreButton;
