import "./index.css";

function Scoreboard({ score, question_value, strikes }) {
  // chosen option != correct_answer ? strikes.push("X")

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
              <div className="strikes-display">
                {strikes.map((strike, index) => (
                  <div key={`${index}-${Date.now()}`}>{strike}</div>
                ))}
              </div>
              <div className="strikes-title">STRIKES</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scoreboard;
