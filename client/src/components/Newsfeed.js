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
        <div>
        <div className="jumbotron">
            <img
            className="img-fluid img-thumbnail"
            src="https://images.pexels.com/photos/459688/pexels-photo-459688.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            />
        </div>
        <h1>Create a blog post</h1>
        <form className="form-group mt-5 mb-5" onSubmit={handleSubmit}>
            <input className="form-control mb-5" required ref={titleRef} placeholder="Title" />
            <textarea className="form-control mb-5" required ref={bodyRef} placeholder="Body" />
            <input className="form-control mb-5" ref={authorRef} placeholder="Screen name" />
            <button className="btn btn-success mt-3 mb-5" disabled={state.loading} type="submit">
            Save Post
            </button>
      </form>
    </div>
      </form> 
    );
}

// onChange={handleInputChange} - had it inside the textinput
// value={search} - had it inside the textinput
// disabled={state.loading} - inside button

/* HOOK
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
useRef() is useful for more than the ref attribute. It’s handy for keeping any mutable value around similar to how you’d use instance fields in classes.



            <TextField 
            className="posts"
            // ref={bodyRef}
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
            >Submit</Button>
 */


export default Newsfeed;
