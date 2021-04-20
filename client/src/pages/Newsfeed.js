// import React, { Component } from "react";
// import Newsfeed from "../components/Newsfeed"
// // import { useStoreContext } from "../utils/GlobalState";
// // import { ADD_POST } from "../utils/actions";
// import API from "../utils/API";


// class Newsfeed extends Component {
//     state = {
//         error: "",
//         newsfeedposts: [],
//         results: []
//     };

//     componentDidMount() {
//         API.getNewsfeedPosts()
//         .then(res => this.setState({ newsfeedposts: res.data.message }))
//         .catch(err => console.log(err));
//     }

//     handleInputChange = e => {
//         this.setState({ newsfeedposts: e.target.value });
//     }
// }


// export default Newsfeed;


