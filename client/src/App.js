import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Login from './components/LoginForm';
import Register from './components/Register';
import Alert from './components/Alert';
//import JobSearch from "./pages/JobSearch";
import SearchForm from './components/SearchForm';
import { ThemeProvider } from '@material-ui/styles';
import Newsfeed from './components/Newsfeed';
import { StoreProvider } from './utils/GlobalState';
import LandingPage from './pages/LandingPage';
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
<<<<<<< HEAD
import Footer from "./components/Footer";
=======
import './styles/style.css';
>>>>>>> fd0f653e89cd471630dfefe86878540c48933a2c

// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <div>
            <StoreProvider>
              <Wrapper>
                <Navbar />
                <Alert />
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/search" component={SearchForm} />
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                </Switch>
                <Switch>
                  <Route exact path="/newsfeed" component={Newsfeed} />
                </Switch>
                <Footer />
              </Wrapper>
            </StoreProvider>
          </div>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
