import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LandingPage from "./pages/LandingPage";
import Wrapper from "./components/wrapper";
import Navbar from "./components/navbar";
import Login from "./components/login";

import LandingPage from './pages/LandingPage';
// import Wrapper from "./components/Wrapper/index";
import Navbar from './components/Navbar/app';

function App() {
  return (
    <Router>
    <div>
      <Wrapper>
      {/* <Login /> */}
      <Navbar />
      <h1>hello world</h1>
      <Route exact path="/" component={Login} />
      <LandingPage />
      </Wrapper>
    </div>
      <div>
        <Navbar />
        <h1>hello world</h1>
        <LandingPage />
      </div>
    </Router>
  );
}

export default App;
