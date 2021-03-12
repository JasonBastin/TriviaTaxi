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
      console.log(triviaObjects);
      for (const props in triviaObjects) {
        console.log(triviaObjects[props].results);
      }
    };
    getTrivia();
  }, []);

  // const setUpQuestions = () => {};

  return (
    <div className="newGame">
      <Scoreboard />
      <h1>New Game</h1>
      <div className="current-question">
        <Question />
      </div>
    </div>
  );
};

export default NewGame;
