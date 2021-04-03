import React from "react";
import "./index.css";

function Options({
  options,
  answer,
  question_value,
  handleCorrectGuess,
  handleWrongGuess,
  nextQuestion,
}) {
  const handleOptionClick = (e) => {
    if (answer === e.target.innerText) {
      handleCorrectGuess(question_value);
      setTimeout(nextQuestion, 4000);
    } else {
      handleWrongGuess();
      setTimeout(nextQuestion, 4000);
    }
  };

  console.log(options);

  return (
    <div>
      {options &&
        options[0] &&
        options.map((option, index) => (
          <button
            className="unanswered"
            id={`${index}-${Date.now()}`}
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
