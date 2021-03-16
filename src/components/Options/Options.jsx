import React from "react";
import "./index.css";

function Options({ options, answer }) {
  const handleOptionClick = (e) => {};

  return (
    <div>
      {options &&
        options[0] &&
        options.map((option, index) => (
          <button
            className="option"
            key={`${index}-${Date.now()}`}
            onClick={handleOptionClick}
          >
            {option}
          </button>
        ))}
    </div>
  );
}

export default Options;
