import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <div className="introduction" style={{ width: "85vw", margin: "auto" }}>
        Welcome, to Trivia Taxi - 13,000 simulated trivia apps on the web, but
        there's only one that steals the rules and foundational essence of the
        reasonably popular syndicated trivia television show, Cash Cab. Choose a
        subject, and you'll be quized all the way to your destination. As the
        meter clicks, the questions get harder and the stakes get higher. But be
        careful, on this app it's 3 strikes and you're out. So, what do you say?
        You in?
        <span
          style={{
            display: "block",
            marginTop: "30px",
            fontSize: "20px",
          }}
        >
          <i>CUE B ROLL AND SOFT ROCK INTRO...</i>
        </span>
        <Link to="/NewGame">
          <button>GET IN</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
