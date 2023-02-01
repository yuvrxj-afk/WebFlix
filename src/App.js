import React from "react";
import HomeScreen from "./components/HomeScreen";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./styles/App.css";
import Login from "./components/Login";

function App() {
  const user = null;
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Switch>
            <Route exact path="/">
              <HomeScreen />
            </Route>
          </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
