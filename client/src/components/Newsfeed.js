import React, { useRef } from "react";
import { useStoreContext } from "../utils/GlobalState";
import { ADD_POST, LOADING } from "../utils/actions";
import API from "../utils/API";
import {makeStyles, Button, TextField} from '@material-ui/core';
import PostList from "../components/PostList";

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
        <div>
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
            // disabled={state.loading} 
            >Submit</Button>
      </form> 
      <PostList />
      </div>
    );
}
// onChange={handleInputChange} - had it inside the textinput
// value={search} - had it inside the textinput
// disabled={state.loading} - inside button
/* HOOK
useRef returns a mutable ref object whose .current property is initialized to the passed argument (initialValue). The returned object will persist for the full lifetime of the component.
useRef() is useful for more than the ref attribute. It's handy for keeping any mutable value around similar to how you'd use instance fields in classes.
 */
export default Newsfeed;
