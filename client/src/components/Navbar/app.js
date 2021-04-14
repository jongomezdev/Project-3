import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import { faSearch} from '@fortawesome/free-solid-svg-icons';
import "./style.css";

const addressCard = <FontAwesomeIcon icon={faAddressCard} />
const search = <FontAwesomeIcon icon={faSearch} />
const comments = <FontAwesomeIcon icon={faComments} />

function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        
        </button>
        
        <div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/profile"
                className={
                  window.location.pathname === "/" || window.location.pathname === "/profile"
                    ? "nav-link active"
                    : "nav-link"
                }
              > {addressCard}
                Profile
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/newsfeed"
                className={window.location.pathname === "/newsfeed" ? "nav-link active" : "nav-link"}
              >{comments}
                Newsfeed
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/search"
                className={window.location.pathname === "/search" ? "nav-link active" : "nav-link"}
              > {search}
                Search
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;