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
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const getTrivia = async () => {
      const easyQuestions = await fetchEasyQuestions();
      const mediumQuestions = await fetchMediumQuestions();
      const hardQuestions = await fetchHardQuestions();
      const dblOrNothingQuestion = await fetchDoubleOrNothingQuestion();

      setQuestions({
        easy_questions: easyQuestions,
        medium_questions: mediumQuestions,
        hard_questions: hardQuestions,
        dbl_or_nothing_question: dblOrNothingQuestion,
      });
    };
    getTrivia();
  }, []);

  console.log(questions);

  return (
    <div className="newGame">
      <Scoreboard />
      <h1>New Game</h1>
      <div className="current-question">
        <Question questions={questions} />
      </div>
    </div>
  );
};

export default NewGame;
