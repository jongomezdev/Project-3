import React from "react";
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import {makeStyles, CssBaseline, Button, Container, Avatar, Typography, TextField, FormControlLabel, Checkbox, Grid, Link} from '@material-ui/core';
// import "./style.css";
// USING MATERIAL UI 
const useStyles = makeStyles((styles) => ({
    // STYLING BELOW
    loginname: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      marginTop: styles.spacing(10),
    },
    form: {
        width: "100%",

    },
    submit: {
        margin: styles.spacing(3, 0, 2),
    },
    avatar: {
        backgroundColor: styles.palette.primary.dark,
    },
    
}));

function Login() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.loginname}>
           <Avatar className="classes.avatar">
                <VpnKeyOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">Login</Typography>
            <form className="classes.form">
            <TextField
                    id="email"
                    name="email"
                    autoComplete="email"
                    label="Email Address"
                    margin="normal"
                    fullWidth
                    required
                    autoFocus
                />
            <TextField
                    id="password"
                    name="password"
                    autoComplete="password"
                    label="Password"
                    margin="normal"
                    type="password"
                    fullWidth
                    required
                />
            <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    className={classes.submit}
                    fullWidth
                >Login</Button>
                <FormControlLabel
                    control={ <Checkbox color="primary" value="remember" />}
                    label="Remember Me"
                />
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="bodyLink">Forget Password</Link>
              </Grid>
              <Grid item xs>
                <Link href="#" variant="bodyLink">Sign Up</Link>
              </Grid>
            </Grid>

            </form>
            </div>
        </Container>
    )
}

export default Login;