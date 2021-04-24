import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from '../actions/auth';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faSignOutAlt,
  faCog,
} from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import './style.css';

const addressCard = <FontAwesomeIcon icon={faAddressCard} />;
const search = <FontAwesomeIcon icon={faSearch} />;
const comments = <FontAwesomeIcon icon={faComments} />;
const loggingout = <FontAwesomeIcon icon={faSignOutAlt} />;
const settings = <FontAwesomeIcon icon={faCog} />;

function Navbar({ auth: { isAuthenticated, loading }, logout }) {
  const authLinks = (
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto">
        <li className="nav-item">
          <Link
            to="/profile"
            className={
              window.location.pathname === '/' ||
              window.location.pathname === '/profile'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            {' '}
            {addressCard} Profile
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/newsfeed"
            className={
              window.location.pathname === '/newsfeed'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            {' '}
            {comments} Newsfeed
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/search"
            className={
              window.location.pathname === '/search'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            {' '}
            {search} Search
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="mr-sm-2 nav-link">
            {' '}
            {settings} Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link onClick={logout} to="/" className="mr-sm-2 nav-link">
            {' '}
            {loggingout} Logout
          </Link>
        </li>
      </ul>
    </div>
  );

  const guestLinks = <></>;

  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        DevSync
      </Link>
      <button
        className="navbar-toggler collapsed active"
        href="#"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
    </nav>
  );
}

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logout })(Navbar);

// TODO: if user is logged in, button should say "logout", else say "login"
//  {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
