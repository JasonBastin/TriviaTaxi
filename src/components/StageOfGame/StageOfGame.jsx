import React, { useState } from "react";
import Intro from "../Intro/Intro";
import GameCenter from "../GameCenter/GameCenter";
import GameOver from "../GameOver/GameOver";
import DoubleOrNothing from "../DoubleOrNothing/DoubleOrNothing";

function StageOfGame() {
  const [stateOfGame, setStateOfGame] = useState("intro");

  const startGame = () => {
    setStateOfGame("start game");
  };

  const isLastQuestion = () => {
    setStateOfGame("double or nothing");
  };

  switch (stateOfGame) {
    case "intro":
      return <Intro startGame={startGame} />;
    case "start game":
      return <GameCenter isLastQuestion={isLastQuestion} />;
    case "double or nothing":
      return <DoubleOrNothing />;
    case "game over":
      return <GameOver />;
    default:
      return;
  }
}

export default StageOfGame;
