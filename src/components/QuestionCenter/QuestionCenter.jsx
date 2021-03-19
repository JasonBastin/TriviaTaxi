import { useState, useEffect } from "react";
import Options from "../Options/Options";
import "./index.css";

const QuestionCenter = ({ currentQuestion, nextQuestion, handleScore }) => {
  const { question, answer, options, question_value } = currentQuestion;

  return (
    <div className="question-container">
      <div className="question-card">
        <div className="value">{question_value}</div>
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