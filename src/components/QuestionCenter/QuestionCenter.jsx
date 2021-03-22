import { useState } from "react";
import Options from "../Options/Options";
import Scoreboard from "../Scoreboard/Scoreboard";
import "./index.css";

const QuestionCenter = ({ currentQuestion, nextQuestion }) => {
  const [score, setScore] = useState(0);

  const { question, answer, options, question_value } = currentQuestion;

  const handleScore = (value) => {
    setScore((prevScore) => prevScore + value);
  };

  return (
    <div className="question-container">
      <Scoreboard score={score} question_value={question_value} />
      <div className="question-card">
        <div className="question">{question}</div>
      </div>
      <div className="options-container">
        <Options
          options={options}
          answer={answer}
          question_value={question_value}
          handleScore={handleScore}
          nextQuestion={nextQuestion}
        />
      </div>
    </div>
  );
};

export default QuestionCenter;
