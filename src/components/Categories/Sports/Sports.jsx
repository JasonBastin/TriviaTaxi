import Question from "../../Question/Question";
import { fetchSportsTrivia } from "../../../api/fetchTrivia";
import { useEffect, useState } from "react";

const Sports = () => {
  const [triviaInfo, setTriviaInfo] = useState({});

  useEffect(() => {
    const getSportsTrivia = async () => {
      const trivia = await fetchSportsTrivia();
      console.log(trivia);
    };

    getSportsTrivia();
  }, []);

  return (
    <div>
      <h1>Sports</h1>
      <Question />
    </div>
  );
};

export default Sports;
