import React from 'react';
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

function Register() {
  const classes = useStyles();
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
        <form className="classes.form">
          <Grid container spacing={4}>
            <Grid item xs={1} sm={6}>
              <TextField
                id="firstname"
                name="firstname"
                autoComplete="firstname"
                label="First Name"
                fullWidth
                required
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="lastname"
                name="lastname"
                autoComplete="lastname"
                label="Last Name"
                fullWidth
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                id="email"
                name="email"
                autoComplete="email"
                label="Email Address"
                margin="normal"
                fullWidth
                required
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
                fullWidth
                required
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
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
}

export default Register;
