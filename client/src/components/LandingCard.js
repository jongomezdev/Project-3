import React from "react";
import { Card, makeStyles, CardActions, CardContent, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      width: 370,
      height: 200,
      float: "left",
      padding: "10px",
      margin: "20px",
      alignItems: "center",
      display: "flex",
      flexDirection: "column",
      opacity: "100%",
      textAlign: 'center',
    },
    button: {
      display: 'inline-block',
      backgroundColor: "#90EE90"
    },
    text: {
        textAlign: 'center',
      },
  });

function LandingCard() {
  const classes = useStyles();
    return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          Welcome to DevSync!
        </Typography>
        <Typography className={classes.text} variant="body2" component="p">
          A social place for developers to connect and look for job opportunities.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button className={classes.button} href="/login" size="large">Login</Button>
        <Button className={classes.button} href="/register" size="large">Register</Button>
      </CardActions>
    </Card> 
    )
}

export default LandingCard;
