// import { Button } from "bootstrap";
import React from "react";
// import { Container } from "react-router-dom";
// USING MATERIAL UI 
// import { makeStyles } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container';
// import Avatar from '@material-ui/core/Avatar';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
// import Typography from '@material-ui/core/Typography';
// import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
import {makeStyles, Button, Container, Avatar, Typography, TextField, FormControlLabel} from '@material-ui/core';
// import "./style.css";
// USING MATERIAL UI 
const useStyles = makeStyles((styles) => ({
    // STYLING BELOW
    form: {
        width: "100%",
    },
    submit: {
        // margin: styles.spacing(3, 0, 2),
    },
    avatar: {
        // margin: theme.spacing(1),
        backgroundColor: styles.palette.primary.main,
    },
    main: {
      alignItems: 'center',
    }
}));
function Login() {
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
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
                    autoFocus
                />
            <Button
                    type="submit"
                    color="primary"
                    variant="outlined"
                    className={classes.submit}
                    fullWidth
                >Login</Button>
            </form>
        </Container>
    )
}

export default Login;