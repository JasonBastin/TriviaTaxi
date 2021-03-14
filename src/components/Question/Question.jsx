import "./index.css";
import { useState, useEffect } from "react";

const Question = ({ triviaList }) => {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const {
    question,
    question_worth: value,
    correct_answer: answer,
    incorrect_answers: options,
  } = triviaList[questionNumber];

  useEffect(() => {}, [questionNumber]);

  const questionCounter = () => {
    setQuestionNumber((prevNum) => prevNum + 1);
  };

  return (
    <div className="question-container">
      <div className="question-card"></div>;
      <button onClick={questionCounter}>Next Question</button>
      <div>{questionNumber}</div>
    </div>
  );
};

export default Question;
