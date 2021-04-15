import { Button } from "bootstrap";
import React from "react";
import { Container } from "react-router-dom";
// USING MATERIAL UI 
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Avatar from '@material-ui/core/Avatar';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Button from '@material-ui/core/Button';
// import "./style.css";

// USING MATERIAL UI 

const useStyles = makeStyles((styles) => ({
    // STYLING BELOW
    form: {
        width: "100%",
    },
    submit: {
        margin: styles.spacing(3, 0, 2),
    },
    avatar: {
        backgroundColor: styles.palette.secondary.main,
    }
}));

function Login() {
    const classes = useStyles();

    return (
        <Container component="main" >
            {/* AVATAR /AKA/ ICON HERE */}
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
                    variant="contained"
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
                    variant="contained"
                    margin="normal"
                    type="password"
                    fullWidth
                    required
                    autoFocus
                />
                <FormControlLabel
                    control={ <Checkbox color="primary" value="remember" />}
                    label="Remember Me"
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
