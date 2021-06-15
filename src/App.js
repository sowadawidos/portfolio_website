import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {Login} from "./components/login/Login";
import {Register} from "./components/register/Register";
import {Home} from "./components/home/Home";
import "./scss/main.scss";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/logowanie">
            <Login/>
          </Route>
          <Route path="/rejestracja">
            <Register/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
