import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
    <>
      <p>hello world</p>
      <LandingPage />

    </>
    </Router>
  );
}

export default App;
