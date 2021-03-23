import React from "react";
import "./index.css";

function Options({
  options,
  answer,
  question_value,
  handleScore,
  handleWrongGuess,
  nextQuestion,
}) {
  const handleOptionClick = (e) => {
    console.log("Answer: ", answer, "Guess: ", e.target.innerText);

    if (answer === e.target.innerText) {
      handleScore(question_value);
      setTimeout(nextQuestion, 5000);
    } else {
      handleWrongGuess();
      setTimeout(nextQuestion, 5000);
    }
    console.log(answer);
  };

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
