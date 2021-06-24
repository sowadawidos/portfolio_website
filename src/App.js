import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, {useState, useEffect} from "react"
import {Login} from "./components/Login/Login";
import {Register} from "./components/Register/Register";
import {Home} from "./components/Home/Home";
import "./scss/main.scss";
import {auth, db} from "./API/API"
import {LoggedOut} from "./components/LoggedOut/LoggedOut";
import {ReturnItems} from "./components/Return_items/ReturnItems";

function App() {
  const [user, setUser] = useState();

  const signUp = (email, password) => auth.createUserWithEmailAndPassword(email, password);

  const signIn = (email, password) => auth.signInWithEmailAndPassword(email, password);

  const logOut = () => auth.signOut();

  const sendMessage = message => {
    if (db) {
      db.collection("messages").add({
        email: message.email,
        name: message.name,
        message: message.message
      })
          .catch(error => {
            console.error(error)
          })
    } else {
      console.error("brak bazy")
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)

      return unsubscribe
    })
  })
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home user={user} logOut={logOut} sendMessage={sendMessage}/>
          </Route>
          <Route path="/logowanie">
            <Login signIn={signIn} user={user} logOut={logOut}/>
          </Route>
          <Route path="/rejestracja">
            <Register signUp={signUp} user={user} logOut={logOut}/>
          </Route>
          <Route path="/wyloguj">
            <LoggedOut user={user} logOut={logOut}/>
          </Route>
          <Route path="/oddaj-rzeczy">
            <ReturnItems user={user} logOut={logOut} sendMessage={sendMessage}/>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
