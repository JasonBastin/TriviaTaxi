import { QuestionAnswer } from "@material-ui/icons";
import React from "react";
import "./index.css";

function Scoreboard({ score, question_value }) {
  return (
    <div className="scoreboard-container">
      <div className="question-value">
        <div className="value">WORTH ${question_value}</div>
      </div>
      <div className="scoreboard">
        <div className="score"></div>
        <div className="display"></div>
      </div>
    </div>
  );
}

export default Scoreboard;
