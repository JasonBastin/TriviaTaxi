import "./App.css";
import { Link, Switch, Route } from "react-router-dom";
import {
  Home,
  Science,
  Math,
  History,
  Movies,
  Sports,
} from "./components/Categories";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="title">
          <Link to="/Home">Trivia</Link>
        </div>

        <div className="nav">
          <ul>
            <li>
              <Link to="/Science">Science</Link>
            </li>
            <li>
              <Link to="/Math">Math</Link>
            </li>
            <li>
              <Link to="/History">History</Link>
            </li>
            <li>
              <Link to="/Movies">Movies</Link>
            </li>
            <li>
              <Link to="/Sports">Sports</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="main">
        <Switch>
          <Route path="/Home">
            <Home />
          </Route>
          <Route path="/Science">
            <Science />
          </Route>
          <Route path="/Math">
            <Math />
          </Route>
          <Route path="/History">
            <History />
          </Route>
          <Route path="/Movies">
            <Movies />
          </Route>
          <Route path="/Sports">
            <Sports />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
