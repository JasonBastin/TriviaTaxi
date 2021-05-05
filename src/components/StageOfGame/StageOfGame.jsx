import React, { useState } from "react";
import Intro from "../Intro/Intro";
import GameCenter from "../GameCenter/GameCenter";
import GameOver from "../GameOver/GameOver";
import DoubleOrNothing from "../DoubleOrNothing/DoubleOrNothing";

function StageOfGame() {
  const [stateOfGame, setStateOfGame] = useState("start game");

  switch (stateOfGame) {
    case "intro":
      return <Intro />;
    case "start game":
      return <GameCenter />;
    case "double or nothing":
      return <DoubleOrNothing />;
    case "game over":
      return <GameOver />;
    default:
      return;
  }
}

export default StageOfGame;
