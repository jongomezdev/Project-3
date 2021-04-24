import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { setAlert } from '../actions/alert';
import { register } from '../actions/auth';
import PropTypes from 'prop-types';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import {
  makeStyles,
  CssBaseline,
  Button,
  Container,
  Avatar,
  Typography,
  TextField,
  Grid,
  Link,
} from '@material-ui/core';

const useStyles = makeStyles((styles) => ({
  // styles
  register: {
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

const Register = ({ setAlert, register, isAuthenticated }) => {
  const classes = useStyles();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });
  const { name, email, password, password2 } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== password2) {
      setAlert('Passwords do not match');
    } else {
      register({ name, email, password });
    }
  };

  // Redirect user
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.register}>
        <Avatar className={classes.avatar}>
          <LockOpenIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <form className="classes.form" onSubmit={onSubmit}>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={6}>
              <TextField
                id="name"
                name="name"
                value={name}
                onChange={onChange}
                autoComplete="firstname"
                label="Name"
                fullWidth
                autoFocus
              />
            </Grid>
            <Grid item ={12} sm={6}>
              <TextField
                id="email"
                name="email"
                value={email}
                onChange={onChange}
                autoComplete="email"
                label="Email Address"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="password"
                name="password"
                autoComplete="password"
                label="Password"
                margin="normal"
                type="password"
                value={password}
                onChange={onChange}
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="password2"
                name="password2"
                label="Confirm Password"
                margin="normal"
                type="password"
                value={password2}
                onChange={onChange}
                fullWidth
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            value="Register"
            color="primary"
            variant="outlined"
            className={classes.submit}
            fullWidth
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="gridLink">
                Already have an account? Login
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { setAlert, register })(Register);
