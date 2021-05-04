import { useState } from "react";
import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import GameCenter from "./components/GameCenter/GameCenter";
import Header from "./components/Header/Header";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (isLoggedIn) {
    return (
      <div>
        <Header />

        <GameCenter />
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <h1>You must log in!</h1>
      </div>
    );
  }
}

export default App;
