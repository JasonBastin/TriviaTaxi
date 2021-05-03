import { Link, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import GameCenter from "./components/GameCenter/GameCenter";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header />

      <div className="main">
        <Switch>
          <Route exact path="/Home" component={Home}></Route>
          <Route path="/GameCenter" component={GameCenter}></Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
