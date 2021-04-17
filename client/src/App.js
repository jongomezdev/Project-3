import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LandingPage from "./pages/LandingPage";
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Login from './components/LoginForm';
//import JobSearch from "./pages/JobSearch";
import SearchForm from './components/SearchForm';
// import Form from './components/Form';
// import { ThemeProvider } from './contexts/ThemeContext';
import { ThemeProvider } from '@material-ui/styles';
// import Wrapper from "./components/Wrapper/index";

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <ThemeProvider>
      <Provider store={store}>
        <Router>
          <div>
            <Wrapper>
              <Navbar />
              <Route exact path="/" component={Login} />
              <Switch>
                <Route exact path="/search" component={SearchForm} />
              </Switch>
            </Wrapper>
          </div>
        </Router>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
