import Question from "../../Question/Question";
import { useEffect } from "react";
import { fetchHistoryTrivia } from "../../../api/fetchTrivia";

const History = () => {
  useEffect(() => {
    const getHistoryTrivia = async () => {
      const trivia = await fetchHistoryTrivia();
      console.log(trivia);
    };

    getHistoryTrivia();
  }, []);
  return (
    <div>
      <h1>History</h1>
      <Question />
    </div>
  );
};

export default History;
