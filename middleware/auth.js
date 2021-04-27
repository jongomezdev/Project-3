const jwt = require('jsonwebtoken');
const config = require('config');

// Middleware function that has access to the request life cycle
module.exports = function (req, res, next) {
  // Get token from the header
  const token = req.header('x-auth-token');

  // Check if there's no token (catch)
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }
  // Verify token IF there is one
  try {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET || config.get('jwtSecret')
    );
    req.user = decoded.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};

// In React we will constantly make a request with the token if we're authenticated,
// and fill our redux/application state with the user object, so we know which user is logged in.

// Login with users that are already in the database
