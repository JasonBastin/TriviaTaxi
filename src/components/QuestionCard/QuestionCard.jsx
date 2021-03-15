import "./index.css";
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
        <div className="value">{trivia.question_worth}</div>
        <div className="question">{trivia.question}</div>
        <div className="options">{trivia.incorrect_answers}</div>
      </div>
      ;<button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default Question;
