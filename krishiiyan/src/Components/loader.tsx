import React from "react";
import "./DotSpinner.css";

const DotSpinner = () => {
  return (
    <div className="dot-spinner">
      {[...Array(8)].map((_, index) => (
        <div key={index} className={`dot-spinner__dot dot-${index + 1}`}>
          <div className="dot-spinner__inner"></div>
        </div>
      ))}
    </div>
  );
};

export default DotSpinner;
