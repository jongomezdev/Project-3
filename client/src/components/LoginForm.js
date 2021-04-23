import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import VpnKeyOutlinedIcon from '@material-ui/icons/VpnKeyOutlined';
import {
  makeStyles,
  CssBaseline,
  Button,
  Container,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Grid,
  Link,
} from '@material-ui/core';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { login } from '../actions/auth';

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
    width: '100%',
  },
  submit: {
    margin: styles.spacing(3, 0, 2),
  },
  avatar: {
    backgroundColor: styles.palette.primary.dark,
    margin: styles.spacing(1),
  },
}));

function Login({ login, isAuthenticated }) {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  // Redirect if logged in

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.loginname}>
        <Avatar className={classes.avatar}>
          <VpnKeyOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form className="classes.form" onSubmit={(e) => onSubmit(e)}>
          <TextField
            id="email"
            name="email"
            autoComplete="email"
            label="Email Address"
            value={email}
            onChange={(e) => onChange(e)}
            margin="normal"
            fullWidth
            autoFocus
          />
          <TextField
            id="password"
            name="password"
            label="Password"
            value={password}
            onChange={(e) => onChange(e)}
            margin="normal"
            autoComplete="password"
            type="password"
            fullWidth
          />
          <Button
            type="submit"
            color="primary"
            variant="outlined"
            className={classes.submit}
            fullWidth
          >
            Login
          </Button>
          <FormControlLabel
            control={<Checkbox color="primary" value="remember" />}
            label="Remember Me"
          />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="gridLink">
                Forget Password
              </Link>
            </Grid>
            <Grid item xs>
              <Link href="#" variant="gridLink">
                Sign Up
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
