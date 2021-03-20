import "./index.css";

function Scoreboard({ score, question_value }) {
  return (
    <div className="scoreboard-container">
      <div className="scoreboard">
        <div className="question-value">
          <div className="value">WORTH ${question_value}</div>
        </div>
        <div className="scoreboard-stats">
          <div className="score"></div>
          <div className="display"></div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
