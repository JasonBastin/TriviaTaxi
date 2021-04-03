import { useState, useEffect } from "react";
import {
  fetchEasyQuestions,
  fetchMediumQuestions,
  fetchHardQuestions,
  fetchDoubleOrNothingQuestion,
} from "../../api/fetchTrivia";
import { decodeText } from "../../tools/decodeText";
import QuestionCenter from "../QuestionCenter/QuestionCenter";
import "./index.css";

const TriviaTaxi = () => {
  const [triviaList, setTriviaList] = useState({});
  const [questionCount, setQuestionCount] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState({});
  const [score, setScore] = useState(0);
  const [strikes, setStrikes] = useState([]);

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
    setQuestionCount((prevQuestion) => prevQuestion + 1);
  };

  const handleWrongGuess = () => {
    setStrikes((prev) => [...prev, "X"]);
  };

  const handleCorrectGuess = (value) => {
    setScore((prevScore) => prevScore + value);
  };

  return (
    <div className="trivia-taxi">
      <QuestionCenter
        strikes={strikes}
        score={score}
        handleCorrectGuess={handleCorrectGuess}
        handleWrongGuess={handleWrongGuess}
        nextQuestion={nextQuestion}
        currentQuestion={currentQuestion}
      />
    </div>
  );
};

export default TriviaTaxi;
