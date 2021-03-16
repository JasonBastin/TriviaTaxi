import "./index.css";
import Options from "../Options/Options";
import { useState, useEffect } from "react";

const Question = ({ currentQuestion, nextQuestion }) => {
  const { question, answer, options, question_value } = currentQuestion;
  console.log(question, answer, options, question_value);
  return (
    <div className="question-container">
      <div className="question-card">
        <div className="value">{question_value}</div>
        <div className="question">{question}</div>
      </div>
      <div className="options-container">
        <Options options={options} answer={answer} />
      </div>
      <button onClick={nextQuestion}>Next Question</button>
    </div>
  );
};

export default Question;
