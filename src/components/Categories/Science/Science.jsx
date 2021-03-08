import Question from "../../Question/Question";
import { fetchScienceTrivia } from "../../../api/fetchTrivia";
import { useEffect } from "react";

const Science = () => {
  useEffect(() => {
    const getScienceTrivia = async () => {
      const trivia = await fetchScienceTrivia();
      console.log(trivia);
    };

    getScienceTrivia();
  }, []);

  return (
    <div>
      <h1>Science</h1>
      <Question />
    </div>
  );
};

export default Science;
