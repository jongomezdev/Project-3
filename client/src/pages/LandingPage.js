import React from "react";
import background from "../images/bcg.jpg";
// import background from "../video/video.mp4";
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

