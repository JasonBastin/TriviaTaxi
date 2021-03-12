import {
  fetchEasyQuestions,
  fetchMediumQuestions,
  fetchHardQuestions,
  fetchDoubleOrNothingQuestion,
} from "../../api/fetchTrivia";
import { useState, useEffect } from "react";
import Scoreboard from "../Scoreboard/Scoreboard";
import Question from "../Question/Question";

const NewGame = () => {
  const [newGameLineUp, setNewGameLineUp] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);

  useEffect(() => {
    const getTrivia = async () => {
      const easyTriviaObj = await fetchEasyQuestions();
      const mediumTriviaObj = await fetchMediumQuestions();
      const hardTriviaObj = await fetchHardQuestions();
      const dblOrNothingTriviaObj = await fetchDoubleOrNothingQuestion();
      const triviaObjects = {
        easyTriviaObj,
        mediumTriviaObj,
        hardTriviaObj,
        dblOrNothingTriviaObj,
      };

      let lineUp = [];
      for (const props in triviaObjects) {
        triviaObjects[props].results.forEach((result) => {
          lineUp.push(result);
        });
      }

      setNewGameLineUp(lineUp);
    };
    getTrivia();
  }, []);

  const questionCounter = () => {
    setQuestionNumber((prevNum) => prevNum + 1);
  };

  return (
    <div className="newGame">
      <Scoreboard />
      <h1>New Game</h1>
      <div className="current-question">
        <Question
          questionNumber={questionNumber}
          questionCounter={questionCounter}
          newGameLineUp={newGameLineUp}
        />
      </div>
    </div>
  );
};

export default NewGame;
