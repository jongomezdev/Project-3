import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Login from "../src/components/LoginCard"

function App() {
  return (
    <Router>
    <>
      <p>hello world</p>
      <Login>

      </Login>
    </>
    </Router>
  );
}

export default App;
