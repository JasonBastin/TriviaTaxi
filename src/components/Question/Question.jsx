const Question = ({ questionCounter, questionNumber }) => {
  return (
    <div className="question-container">
      <div className="question">Question</div>;
      <button onClick={questionCounter}>Next Question</button>
      <div>{questionNumber}</div>
    </div>
  );
};

export default Question;
