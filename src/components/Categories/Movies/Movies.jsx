import Question from "../../Question/Question";
import { fetchMoviesTrivia } from "../../../api/fetchTrivia";
import { useEffect } from "react";

const Movies = () => {
  useEffect(() => {
    const getMoviesTrivia = async () => {
      const trivia = await fetchMoviesTrivia();
      console.log(trivia);
    };

    getMoviesTrivia();
  }, []);
  return (
    <div>
      <h1>Movies</h1>
      <Question />
    </div>
  );
};

export default Movies;
