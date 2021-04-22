import axios from 'axios';

// When there is a token.. send it with every request
const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  } else {
    delete axios.defaults.headers.common['x-auth-auth'];
  }
};

export default setAuthToken;
