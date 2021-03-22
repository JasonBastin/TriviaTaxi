import "./index.css";

function Scoreboard({ score, question_value }) {
  return (
    <div className="scoreboard-container">
      <div className="scoreboard">
        <div className="question-value">
          <div className="worth">WORTH ${question_value}</div>
        </div>
        <div className="scoreboard-stats">
          <div className="score-title">SCORE</div>
          <div className="display">
            <div className="score-display">
              $<div className="score">{score}</div>
            </div>
            <div className="strikes">
              <div className="strikes-display"></div>
              <div className="strikes-title">STRIKES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
