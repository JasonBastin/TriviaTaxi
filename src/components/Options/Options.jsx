import React from "react";
import "./index.css";

function Options({ options }) {
  return (
    <div>
      {options &&
        options[0] &&
        options.map((option, index) => (
          <button className="option" key={`${index}-${Date.now()}`}>
            {option}
          </button>
        ))}
    </div>
  );
}

export default Options;
