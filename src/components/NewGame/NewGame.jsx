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
  const [triviaList, setTriviaList] = useState([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

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

      const triviaListWithQuestionWorth = triviaList.map(
        (questionObject, i) => {
          const questionWorth = [25, 25, 25, 25, 50, 50, 50, 50, 100, 100, 0];
          return (questionObject = {
            ...questionObject,
            question_worth: questionWorth[i],
          });
        }
      );
      setTriviaList(triviaListWithQuestionWorth);
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
          triviaList={triviaList}
        />
      </div>
    </div>
  );
};

export default NewGame;
