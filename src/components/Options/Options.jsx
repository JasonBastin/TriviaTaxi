import { useState } from "react";
import "./index.css";

const Options = ({
  options,
  answer,
  question_value,
  handleCorrectGuess,
  handleWrongGuess,
  nextQuestion,
  handleShowAnswer,
  showAnswer,
}) => {
  const [selectedOption, setSelectedOption] = useState({});

  const handleOptionClick = (option) => (e) => {
    handleShowAnswer();

    if (answer === e.target.innerText) {
      handleCorrectGuess(question_value);
      setTimeout(nextQuestion, 4000);
    } else {
      handleWrongGuess();
      setTimeout(nextQuestion, 4000);
    }
  };

  return (
    <div>
      {options &&
        options[0] &&
        options.map((option, index) => {
          if (option === answer) {
            return (
              <button
                className={`option ${showAnswer ? "correct" : ""}`}
                id={`${index}-${Date.now()}`}
                key={`${index}-${Date.now()}`}
                onClick={handleOptionClick()}
              >
                {option}
              </button>
            );
          }
          return (
            <button
              className={`option ${showAnswer ? "wrong" : ""}`}
              id={`${index}-${Date.now()}`}
              key={`${index}-${Date.now()}`}
              onClick={handleOptionClick()}
            >
              {option}
            </button>
          );
        })}
    </div>
  );
};

export default Options;
