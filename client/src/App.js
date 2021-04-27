import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import Login from './components/LoginForm';
import Register from './components/Register';
import Alert from './components/Alert';
import Footer from './components/Footer';
//import JobSearch from "./pages/JobSearch";
import SearchForm from './components/SearchForm';
import { ThemeProvider } from '@material-ui/styles';
import Newsfeed from './components/Newsfeed';

import LandingPage from './pages/LandingPage';
import Dashboard from './components/Dashboard';
import CreateProfile from './components/CreateProfile';
import EditProfile from './components/EditProfile';
import AddExperience from './components/AddExperience';
import AddEducation from './components/AddEducation';
import Profiles from './components/profiles/Profiles';
import Profile from './components/profile/Profile';
import Posts from './components/posts/Posts';
import PrivateRoute from './components/PrivateRoute';
import './styles/style.css';


// Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import JobSearch from './pages/Jobsearch';

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
<<<<<<< HEAD
            <StoreProvider>
              <Wrapper>
                <Navbar />
                <Alert />
                <Switch>
                  <Route exact path="/" component={LandingPage} />
                  <Route exact path="/login" component={Login} />
                  <Route exact path="/register" component={Register} />
                  <Route exact path="/search" component={JobSearch} />
                  <PrivateRoute exact path="/dashboard" component={Dashboard} />
                  <PrivateRoute exact path="/" component={Footer} />
                </Switch>
                <Switch>
                  <Route exact path="/newsfeed" component={Newsfeed} />
                </Switch>
              </Wrapper>
            </StoreProvider>
=======
            <Wrapper>
              <Navbar />
              <Alert />
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/search" component={JobSearch} />
                <Route exact path="/profiles" component={Profiles} />
                <Route exact path="/profile/:id" component={Profile} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute
                  exact
                  path="/create-profile"
                  component={CreateProfile}
                />
                <PrivateRoute
                  exact
                  path="/edit-profile"
                  component={EditProfile}
                />
                <PrivateRoute
                  exact
                  path="/add-experience"
                  component={AddExperience}
                />
                <PrivateRoute
                  exact
                  path="/add-education"
                  component={AddEducation}
                />
                <PrivateRoute exact path="/posts" component={Posts} />
              </Switch>
              <Switch>
                <Route exact path="/newsfeed" component={Newsfeed} />
              </Switch>
            </Wrapper>
>>>>>>> f70a5b4b4414bcc9aa020c6a108d053771a762ab
          </div>
          <Footer />
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
