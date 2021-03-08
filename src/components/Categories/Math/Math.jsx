import Question from "../../Question/Question";
import { fetchMathTrivia } from "../../../api/fetchTrivia";
import { useEffect } from "react";

const Math = () => {
  useEffect(() => {
    const getMathTrivia = async () => {
      const trivia = await fetchMathTrivia();
      console.log(trivia);
    };

    getMathTrivia();
  }, []);

  return (
    <div>
      <h1>Math</h1>
      <Question />
    </div>
  );
};

export default Math;
