import { useState, useEffect } from "react";
import {
  fetchEasyQuestions,
  fetchMediumQuestions,
  fetchHardQuestions,
  fetchDoubleOrNothingQuestion,
} from "../../api/fetchTrivia";
import { decodeText } from "../../tools/decodeText";
import Question from "../Question/Question";
import "./index.css";

const GameCenter = ({ isLastQuestion }) => {
  const [triviaList, setTriviaList] = useState({});
  const [questionCount, setQuestionCount] = useState(7);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [score, setScore] = useState(0);
  const [strikes, setStrikes] = useState([]);
  const [showAnswer, setShowAnswer] = useState(false);

  useEffect(() => {
    const getTrivia = async () => {
      const easyTriviaObj = await fetchEasyQuestions();
      const mediumTriviaObj = await fetchMediumQuestions();
      const hardTriviaObj = await fetchHardQuestions();
      const dblOrNothingTriviaObj = await fetchDoubleOrNothingQuestion();

      const completeTrivia = {
        easyTriviaObj,
        mediumTriviaObj,
        hardTriviaObj,
        dblOrNothingTriviaObj,
      };

      let arrayOfCompleteTrivia = [];
      for (const props in completeTrivia) {
        completeTrivia[props].forEach((obj) => {
          arrayOfCompleteTrivia.push(obj);
        });
      }

      setTriviaList(
        arrayOfCompleteTrivia.map((triviaObj, i) => {
          const question = decodeText(triviaObj.question);
          const answer = decodeText(triviaObj.correct_answer);
          const options = [
            ...triviaObj.incorrect_answers.map((answers) =>
              decodeText(answers)
            ),
            answer,
          ].sort(() => Math.random() - 0.5);
          const questionValues = [25, 25, 25, 25, 50, 50, 50, 50, 100, 100, 0];

          return (triviaObj = {
            question: question,
            answer: answer,
            options: options,
            question_value: questionValues[i],
          });
        })
      );
    };
    getTrivia();
  }, []);

  useEffect(() => {
    if (!triviaList[0]) return;

    setCurrentQuestion(() => triviaList[questionCount]);
  }, [triviaList, questionCount]);

  const nextQuestion = () => {
    if (questionCount > 8) {
      isLastQuestion();
    }
    setQuestionCount((prevQuestion) => prevQuestion + 1);
    setShowAnswer(false);
  };

  const handleWrongGuess = () => {
    setStrikes((prev) => [...prev, "X"]);
  };

  const handleCorrectGuess = (value) => {
    setScore((prevScore) => prevScore + value);
  };

  const handleShowAnswer = () => {
    setShowAnswer(true);
  };

  return (
    <div className="trivia-taxi">
      <Question
        strikes={strikes}
        score={score}
        handleCorrectGuess={handleCorrectGuess}
        handleWrongGuess={handleWrongGuess}
        nextQuestion={nextQuestion}
        currentQuestion={currentQuestion}
        handleShowAnswer={handleShowAnswer}
        showAnswer={showAnswer}
      />
    </div>
  );
};

export default GameCenter;
