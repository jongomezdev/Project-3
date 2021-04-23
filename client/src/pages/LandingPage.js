import React from "react";
import background from "../images/developer.jpg";
import LandingCard from "../components/LandingCard";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    root: {
      alignItems: "center",
      display: "flex",
      flexDirection: "row", 
      left: '50%',
      justifyContent: "center",
      backgroundSize: 'cover',
    },
  });

function LandingPage() {
    const classes = useStyles();
    return (
        <div className={classes.root} style={{ 
            backgroundImage: `url(${background})`,
            backgroundRepeat: 'no-repeat',
            height: '91.5vh',
            width: '100%',
          }}>
        <LandingCard />
        </div>
    )
}

export default LandingPage;