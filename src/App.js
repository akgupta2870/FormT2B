import "./styles.css";
import Login from "./Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
export default function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <login />
            </Route>
            <Route path="/Home">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>

      <Login />
    </div>
  );
}
