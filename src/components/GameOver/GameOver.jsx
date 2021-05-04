import React from "react";
import { Link } from "react-router-dom";

function GameOver() {
  return (
    <div>
      <div className="game-over-title">
        <h1>Oh, no! Three strikes and you're out!</h1>
      </div>
      <div className="try-again">
        <Link to="/GameCenter">
          <button onClick={() => window.location.reload(false)}>
            Try Again!
          </button>
        </Link>
      </div>
    </div>
  );
}

export default GameOver;
