import { useState } from "react";
import Options from "../Options/Options";
import Scoreboard from "../Scoreboard/Scoreboard";
import GameOver from "../GameOver/GameOver";
import "./index.css";

const QuestionCenter = ({ currentQuestion, nextQuestion }) => {
  const [score, setScore] = useState(0);
  const [strikes, setStrikes] = useState([]);

  const { question, answer, options, question_value } = currentQuestion;

  const handleScore = (value) => {
    setScore((prevScore) => prevScore + value);
  };

  const handleWrongGuess = () => {
    setStrikes((prev) => [...prev, "X"]);
  };

  const handleCorrectGuess = () => {};

  if (strikes.length < 3) {
    return (
      <div className="question-container">
        <Scoreboard
          score={score}
          question_value={question_value}
          strikes={strikes}
        />
        <div className="question-card">
          <div className="question">{question}</div>
        </div>
        <div className="options-container">
          <Options
            options={options}
            answer={answer}
            question_value={question_value}
            handleScore={handleScore}
            handleWrongGuess={handleWrongGuess}
            nextQuestion={nextQuestion}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Scoreboard
          score={score}
          question_value={question_value}
          strikes={strikes}
        />
        <GameOver />
      </div>
    );
  }
};

export default QuestionCenter;
