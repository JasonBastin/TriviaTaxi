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
  const [triviaList, setTriviaList] = useState({});

  useEffect(() => {
    const getTrivia = async () => {
      const easyTriviaObj = await fetchEasyQuestions();
      const mediumTriviaObj = await fetchMediumQuestions();
      const hardTriviaObj = await fetchHardQuestions();
      const dblOrNothingTriviaObj = await fetchDoubleOrNothingQuestion();

      const triviaData = {
        easyTriviaObj,
        mediumTriviaObj,
        hardTriviaObj,
        dblOrNothingTriviaObj,
      };

      let newTriviaList = [];
      for (const props in triviaData) {
        triviaData[props].forEach((obj) => {
          newTriviaList.push(obj);
        });
      }

      const triviaListWithQuestionWorth = newTriviaList.map(
        (questionObject, i) => {
          const questionWorth = [25, 25, 25, 25, 50, 50, 50, 50, 100, 100, 0];
          return (questionObject = {
            ...questionObject,
            question_worth: questionWorth[i],
          });
        }
      );
      setTriviaList(() => triviaListWithQuestionWorth);
    };
    getTrivia();
  }, []);

  if (!triviaList[0]) return null;

  return (
    <div className="newGame">
      <Scoreboard />
      <h1>New Game</h1>
      <div className="current-question">
        <Question triviaList={triviaList} />
      </div>
    </div>
  );
};

export default NewGame;
