import React from "react";
import { Link } from "react-router-dom";

function GameOver() {
  return (
    <div>
      <h1>Oh, no! Three strikes and you're out!</h1>
      <Link to="/GameCenter">
        <button onClick={() => window.location.reload(false)}>
          Try Again!
        </button>
      </Link>
    </div>
  );
}

export default GameOver;
