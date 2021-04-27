<<<<<<< HEAD
import React from "react";
import background from "../images/bcg.jpg";
// import background from "../video/video.mp4";
import LandingCard from "../components/LandingCard";
=======
import React from 'react';
import { Redirect } from 'react-router-dom';
import background from '../images/developer.jpg';
import LandingCard from '../components/LandingCard';
>>>>>>> f70a5b4b4414bcc9aa020c6a108d053771a762ab
import { makeStyles } from '@material-ui/core';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

const useStyles = makeStyles({
  root: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    left: '50%',
    justifyContent: 'center',
    backgroundSize: 'cover',
  },
});

<<<<<<< HEAD
  function LandingPage() {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ 
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            height: '96.5vh',
            width: '100%',
          }}>
        <LandingCard />
        </div>
    )
}

// function LandingPage() {
//     // const classes = useStyles();
//     return (
//         <div>
//           <video className='root' autoPlay loop muted
//           style={{
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             objectFit: 'cover',
//             left: "50%",
//             top: "50%",
//             transform: "translate(-50%, -50%)",
//             zIndex: "-1"
//           }}>
//               <source src={background} type='video/mp4' />
//           </video>

//         <LandingCard />
//         </div>
//     )
// }

export default LandingPage;

=======
function LandingPage({ isAuthenticated }) {
  const classes = useStyles();
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <div
      className={classes.root}
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        height: '91.5vh',
        width: '100%',
      }}
    >
      <LandingCard />
    </div>
  );
}

// LandingPage.PropTypes = {
//   isAuthenticated: PropTypes.bool,
// };

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps)(LandingPage);
>>>>>>> f70a5b4b4414bcc9aa020c6a108d053771a762ab
