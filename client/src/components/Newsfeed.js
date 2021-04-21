import React, { useRef } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_POST, LOADING } from "../utils/actions";
import API from "../utils/API";
import {makeStyles, Button, TextField} from '@material-ui/core';

const useStyles = makeStyles((styles) => ({
    // STYLING BELOW
    form: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      margin: styles.spacing(10),
    },
    submit: {
        margin: styles.spacing(3, 0, 2),
    },
    posts: {
    }
}));

function Newsfeed() {
    const bodyRef = useRef();
    const [state, dispatch] = useStoreContext();

    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch({ type: LOADING });
        API.savePost({
            body: bodyRef.current.value
        }).then(result => {
            dispatch({
                type: ADD_POST,
                post: result.data
            });
        }).catch(err => console.log(err));

        bodyRef.current.value = "";
    }

    const classes = useStyles();
    return (
       <form className="classes.form" >
            <TextField 
            className="posts"
            ref={bodyRef}
            id="filled-full-width"
            label="Post Here"
            style={{ margin: 8 }}
            placeholder="Posting..."
            helperText="Something fun! TEST"  
            margin="normal"
            fullWidth
            InputLabelProps={{
            shrink: true,
            }}
            variant="filled"
        />
            <Button
            type="submit"
            color="primary"
            variant="outlined"
            className={classes.submit}
            onSubmit={handleFormSubmit}
            disabled={state.loading} 
            >Post</Button>
      </form> 
    );
}

export default Newsfeed;



/*
import React, { useRef } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_POST, LOADING } from "../utils/actions";
import API from "../utils/API";
import {makeStyles, Button, TextField} from '@material-ui/core';

const useStyles = makeStyles((styles) => ({
    // STYLING BELOW
    form: {
      alignItems: 'center',
      display: 'flex',
      flexDirection: 'column',
      margin: styles.spacing(10),
    },
    submit: {
        margin: styles.spacing(3, 0, 2),
    },
    posts: {
    }
}));

function Newsfeed() {
    const bodyRef = useRef();
    const [state, dispatch] = useStoreContext();

    const handleFormSubmit = e => {
        e.preventDefault();
        dispatch({ type: LOADING });
        API.savePost({
            body: bodyRef.current.value
        }).then(result => {
            dispatch({
                type: ADD_POST,
                post: result.data
            });
        }).catch(err => console.log(err));

        bodyRef.current.value = "";
    }

    const classes = useStyles();
    return (
       <form className="classes.form" >
            <TextField 
            className="posts"
            ref={bodyRef}
            id="filled-full-width"
            label="Post Here"
            style={{ margin: 8 }}
            placeholder="Posting..."
            helperText="Something fun! TEST"  
            margin="normal"
            fullWidth
            InputLabelProps={{
            shrink: true,
            }}
            variant="filled"
        />
            <Button
            type="submit"
            color="primary"
            variant="outlined"
            className={classes.submit}
            onSubmit={handleFormSubmit}
            disabled={state.loading} 
            >Post</Button>
      </form> 
    );
}

export default Newsfeed;

*/
