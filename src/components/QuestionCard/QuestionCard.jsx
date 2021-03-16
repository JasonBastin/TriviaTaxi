import "./index.css";
import Options from "../Options/Options";
import { useState, useEffect } from "react";

const Question = ({ triviaList }) => {
  const [questionCount, setQuestionCount] = useState(0);
  const [score, setScore] = useState(0);
  const [trivia, setTrivia] = useState({});

  useEffect(() => {
    setTrivia(triviaList[questionCount]);
  }, [questionCount]);

  const nextQuestion = () => {
    setQuestionCount((prevNum) => prevNum + 1);
  };

  return (
    <div className="question-container">
      <div className="question-card">
        <div className="value">{trivia.question_value}</div>
        <div className="question">{trivia.question}</div>
      </div>
      <div className="options-container">
        <Options options={trivia.options} answer={trivia.correct_answer} />
      </div>
      ;<button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default Question;
