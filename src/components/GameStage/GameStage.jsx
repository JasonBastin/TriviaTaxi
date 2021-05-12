import React, { useState } from "react";
import Intro from "../Intro/Intro";
import GameCenter from "../GameCenter/GameCenter";
import GameOver from "../GameOver/GameOver";
import DoubleOrNothing from "../DoubleOrNothing/DoubleOrNothing";

function GameStage() {
  const [stateOfGame, setStateOfGame] = useState("intro");
  const [score, setScore] = useState(0);

  const startGame = () => {
    setStateOfGame("start game");
  };

  const isLastQuestion = () => {
    setStateOfGame("double or nothing");
  };

  const handleScoreChange = (value) => {
    setScore((prevScore) => prevScore + value);
  };

  switch (stateOfGame) {
    case "intro":
      return <Intro startGame={startGame} />;
    case "start game":
      return (
        <GameCenter
          handleScoreChange={handleScoreChange}
          score={score}
          isLastQuestion={isLastQuestion}
        />
      );
    case "double or nothing":
      return (
        <DoubleOrNothing handleScoreChange={handleScoreChange} score={score} />
      );
    case "game over":
      return <GameOver score={score} />;
    default:
      return;
  }
}

export default GameStage;
