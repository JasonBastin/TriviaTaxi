import Options from "../Options/Options";
import Scoreboard from "../Scoreboard/Scoreboard";
import GameOver from "../GameOver/GameOver";
import "./index.css";

const QuestionCenter = ({
  currentQuestion,
  nextQuestion,
  optionStatus,
  strikes,
  score,
  handleCorrectGuess,
  handleWrongGuess,
}) => {
  const { question, answer, options, question_value } = currentQuestion;

  if (strikes.length < 3) {
    return (
      <div className="question-container">
        <Scoreboard
          score={score}
          question_value={question_value}
          strikes={strikes}
        />
        <div className="question-card">
          <div className="question">{question}</div>
        </div>
        <div className="options-container">
          <Options
            options={options}
            answer={answer}
            question_value={question_value}
            handleCorrectGuess={handleCorrectGuess}
            handleWrongGuess={handleWrongGuess}
            nextQuestion={nextQuestion}
            optionStatus={optionStatus}
          />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Scoreboard
          score={score}
          question_value={question_value}
          strikes={strikes}
        />
        <GameOver />
      </div>
    );
  }
};

export default QuestionCenter;
