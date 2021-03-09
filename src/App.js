import { Link, Switch, Route } from "react-router-dom";
import {
  Home,
  Science,
  Math,
  History,
  Movies,
  Sports,
} from "./components/Categories";
// import styles from "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="title-header">
          <Link to="/Home" style={{textDecoration: "none"}}>
            <div className="title-container">
              <span className="title-start">T</span><span className="title-end">RIVIA</span> <span className="title-start">T</span><span className="title-end">AXI</span>
            </div>
          </Link>

          <div className="taxi-graphic-1"></div>
          <div className="taxi-graphic-2"></div>
        </div>

        <div className="nav">
          <div className="nav-container">
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
