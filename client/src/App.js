import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LandingPage from "./pages/LandingPage";
import Wrapper from "./components/Wrapper";
import Navbar from "./components/Navbar";
import Login from "./components/LoginForm";
import Register from "./components/Register";
//import JobSearch from "./pages/JobSearch";
import SearchForm from "./components/SearchForm"
// import Form from './components/Form';
// import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeProvider } from '@material-ui/styles'
import Newsfeed from "./components/Newsfeed";
import { StoreProvider } from "./utils/GlobalState";
// import Wrapper from "./components/Wrapper/index";

function App() {
  return (
<ThemeProvider>
  <Router>
    <div>
    <StoreProvider>
      <Wrapper>
        <Navbar />
          <Route exact path="/" component={Login} />
          <Route exact path="/register" component={Register} />
          <Switch>
          <Route exact path="/search" component={SearchForm} />
          </Switch>
          <Switch>
          <Route exact path="/newsfeed" component={Newsfeed} />
        </Switch>
      </Wrapper>
    </StoreProvider>
    </div>
  </Router>
</ThemeProvider>
  );
}

export default App;
