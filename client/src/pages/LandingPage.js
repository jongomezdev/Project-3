// import React from 'react';
// import { Redirect } from 'react-router-dom';
// import background from '../images/developer.jpg';
// import LandingCard from '../components/LandingCard';
// import { makeStyles } from '@material-ui/core';
// import { connect } from 'react-redux';
// // import PropTypes from 'prop-types';

// const useStyles = makeStyles({
//   root: {
//     alignItems: 'center',
//     display: 'flex',
//     flexDirection: 'row',
//     left: '50%',
//     justifyContent: 'center',
//     backgroundSize: 'cover',
//   },
// });

// function LandingPage({ isAuthenticated }) {
//   const classes = useStyles();
//   if (isAuthenticated) {
//     return <Redirect to="/dashboard" />;
//   }

//   return (
//     <div
//       className={classes.root}
//       style={{
//         backgroundImage: `url(${background})`,
//         backgroundRepeat: 'no-repeat',
//         height: '91.5vh',
//         width: '100%',
//       }}
//     >
//       <LandingCard />
//     </div>
//   );
// }

// // LandingPage.PropTypes = {
// //   isAuthenticated: PropTypes.bool,
// // };

// const mapStateToProps = (state) => ({
//   isAuthenticated: state.auth.isAuthenticated,
// });

// export default connect(mapStateToProps)(LandingPage);

import React from 'react';
import { Redirect } from 'react-router-dom';
import background from '../images/bcg.jpg';
// import background from '../images/developer.jpg';
import LandingCard from '../components/LandingCard';
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
        height: '95.5vh',
        width: '100%',
      }}
    >
      <LandingCard />
    </div>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(LandingPage);
