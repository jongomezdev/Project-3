import React from 'react';
import { Icon } from 'antd';
import { Avatar } from 'antd';
import { GithubOutlined } from '@ant-design/icons';
import ReactDOM from 'react-dom';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from 'mdbreact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
const codeIcon = <FontAwesomeIcon icon={faCode} />;
const FooterPage = () => {
  return (
    <footer class="bg-light text-center text-lg-start">
      <div class="container p-5 ">
        <div class="text-center row">
          <div class="col-lg-6 col-md-12 mb-4 mb-md-0 ">
            <h5 class="text-uppercase">DevSync</h5>
            <p>
              For Developers by Developers
              <br></br>
              Join our community
              <br></br>
              Reach out to the creators
            </p>
          </div>
          <div class="col-lg-3 col-md-6">
            <h5 class="text-uppercase">Devs</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="https://github.com/gtscott90" class="text-dark">
                  Greg Scott{' '}
                  
                </a>
                <GithubOutlined />
              </li>
              <li>
                <a href="https://github.com/genis96" class="text-dark">
                  Genis Bardales{' '}
                </a>
                <GithubOutlined />
              </li>
              <li>
                <a href="https://github.com/jongomezdev" class="text-dark">
                  {' '}
                  Jonathan Gomez{' '}
                </a>{' '}
                <GithubOutlined />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <MDBContainer fluid>
        &copy; {new Date().getFullYear()} Copyright: <a href=""> DevSync </a>
      </MDBContainer>
    </footer>
  );
};
export default FooterPage;
