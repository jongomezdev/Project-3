import React from "react";
// import { Card, makeStyles, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import '../components/style/landingcard.css';
import cssCard from "../components/style/landingcard.css";

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

          <div class="card-footer" >
            <a class="btns" href="/login"class="btn btn-primary">Login</a>
            <a href="/register" class="btn register btn-outline-primary">Register</a>
          </div>

      </div>
    </div>
  </div>
</div>
  )
}

// const useStyles = makeStyles({
//     root: {
//       width: 370,
//       height: 200,
//       float: "left",
//       padding: "10px",
//       margin: "20px",
//       alignItems: "center",
//       display: "flex",
//       flexDirection: "column",
//       opacity: "100%",
//       textAlign: 'center',
//       backgroundColor: 'blue'
//     },
//     button: {
//       display: 'inline-block',
//       backgroundColor: "#90EE90"
//     },
//     text: {
//         textAlign: 'center',
//         color: 'white'
//       },
//   });

// function LandingCard() {
//   const classes = useStyles();
//     return (
//     <Card className={classes.root} variant="outlined">
//       <CardContent>
//         <Typography className={classes.text} variant="h5" component="h2">
//           Welcome to DevSync!
//         </Typography>
//         <Typography className={classes.text} variant="body2" component="p">
//           A community for developers to connect and look for job opportunities.
//           <br />
//         </Typography>
//       </CardContent>
//       <CardActions>
//         <Button className={classes.button} href="/login" size="large">Login</Button>
//         <Button className={classes.button} href="/register" size="large">Register</Button>
//       </CardActions>
//     </Card> 
//     )
// }

export default LandingCard;
