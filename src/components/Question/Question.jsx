import "./index.css";

const Question = ({ questionCounter, questionNumber }) => {
  return (
    <div className="question-container">
      <div className="question-card"></div>;
      <button onClick={questionCounter}>Next Question</button>
      <div>{questionNumber}</div>
    </div>
  );
};

export default Question;
