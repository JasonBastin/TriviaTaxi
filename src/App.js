import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TriviaTaxi from "./components/NewGame/NewGame"
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">

      <Header />

      <div className="main">
        <Switch>
          <Route exact path="/Home" component={Home}>
          </Route>
          <Route path="/NewGame" component={TriviaTaxi}>
          </Route>
        </Switch>
      </div>

    </div>
  );
}

export default App;
