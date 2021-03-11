import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import TriviaTaxi from "./components/NewGame/NewGame"


function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="title-header">
          <Link to="/Home" className="link">
            <div className="title-container">
              <span className="title-start">T</span><span className="title-end">RIVIA</span> <span className="title-start">T</span><span className="title-end">AXI</span>
            </div>
          </Link>

          <div className="taxi-graphic-1"></div>
          <div className="taxi-graphic-2"></div>
        </div>

        
      </div>
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
