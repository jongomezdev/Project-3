import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { PostItem, List } from "../List";
import { useStoreContext } from "../../utils/GlobalState";
import { REMOVE_POST, UPDATE_POSTS, LOADING } from "../../utils/actions";
import API from "../../utils/API";

function PostList() {
    const [state, dispatch] = useStoreContext();

    const getPost = () => {
        dispatch({ type: LOADING  });
        API.getPost()
        .then(results => {
            dispatch({
                type: UPDATE_POSTS,
                posts: results.data
            });
        }).catch(err => console.log(err));
    }

    const removePost = id => {
        API.deletePost(id)
        .then(() => {
            dispatch({
                type: REMOVE_POST,
                _id: id
            });
        }).catch(err => console.log(err));
    }

    useEffect(() => {
        getPost();
      }, []);

      return (
        <div>
        <h1>DevSync Posts</h1>
        {state.posts.length ? (
          <List>
            {state.posts.map(post => (
              <ListItem key={post._id}>
                <Link to={"/posts/" + post._id}>
                  <strong>
                    {post.body}
                  </strong>
                </Link>
                <DeleteBtn onClick={() => removePost(post._id)} />
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>Add Your Post</h3>
        )}
      </div>
      );
}

export default PostList;