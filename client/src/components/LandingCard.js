import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cssCard from '../components/style/landingcard.css';
function LandingCard() {
  return (
    <div class="container max">
      <div class="row align-middle">
        <div class="col-md-6 col-lg-4 column">
          <div class="card gradients">
            <div class="txt">
              <h1>Welcome to DevSync!</h1>
              <p>Join our community of developers</p>
            </div>
            <div class="card-footer">
              <a class="btns" href="/login" class="btn btn-primary">
                Login
              </a>
              <a href="/register" class="btn register btn-outline-primary">
                Register
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingCard;
