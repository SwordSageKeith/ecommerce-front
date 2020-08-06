import React from "react";
import "./App.css";
import Header from "./components/Header/Header.js";
import SearchBar from "./components/SearchBar/SearchBar.js";
import ItemGrid from "./components/ItemGrid/ItemGrid.js";
import Login from "./components/LoginPage/Login.js";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <SearchBar />
            <ItemGrid />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
