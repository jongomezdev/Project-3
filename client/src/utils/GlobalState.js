import React, { createContext, useReducer, useContext } from "react";
import { ADD_POST, UPDATE_POSTS, REMOVE_POST, SET_CURR_POST, ADD_FAV, REMOVE_FAV, UPDATE_FAV, LOADING } from "./actions";

const StoreContext = createContext();
const { Provider } = StoreContext;

const reducer = (state, action) => {
    switch(action.type) {
        case ADD_POST: return {
            ...state,
            posts: [...action.post, ...state.posts],
            loading: false
        };
        case UPDATE_POSTS: return {
            ...state,
            posts: [...state.posts],
            loading: false
        };
        case REMOVE_POST: return {
            ...state,
            posts: state.posts.filter((post) => {
                return post._id !== action._id;
            })
        };
        case SET_CURR_POST: return {
            ...state,
            posts: [...action.post],
            loading: false
        };
        case ADD_FAV: return {
            ...state,
            favorites: [...action.post, ...state.favorites],
            loading: false
        };
        case REMOVE_FAV: return {
            ...state,
            favorites: state.favorites.filter((post) => {
                return post._id !== action._id;
            })
        };
        case UPDATE_FAV: return {
            ...state,
            favorites: [...state.favorites],
            loading: false
        };
        case LOADING: return {
            ...state,
            loading: true
        };
        default: return state;
    }
};

const StoreProvider = ({ value = [], ...props }) => {
    const [state, dispatch] = useReducer(reducer, {
        posts: [],
        currPost: {
            _id: 0,
            body: ""
        },
        favorites: [],
        loading: false
    });
    return <Provider value={[state, dispatch]} {...props} />;
}

const useStoreContext = () => {
    return useContext(StoreContext);
  };

export { StoreProvider, useStoreContext };
