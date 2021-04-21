import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";
import { useStoreContext } from "../utils/GlobalState";
import { SET_CURR_POST, ADD_FAVORITE, REMOVE_FAVORITE } from "../utils/actions";

const NewsPosts = props => {
    const [state, dispatch] = useStoreContext();

    useEffect(() => {
        API.getPost(props.match.params.id)
          .then(res => dispatch({ type: SET_CURR_POST, post: res.data }))
          .catch(err => console.log(err));
      }, []);

      

}

export default NewsPosts;