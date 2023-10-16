const jwt = require('jsonwebtoken');
const { User } = require('../models');
require('dotenv').config();

exports.authenticateUser = (req, res, next) => {
  // Get the token from the request header
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    // Verify and decode the token
    const decoded = jwt.verify(token, process.env.SECRET_KEY);

    // Find the user in the database
    User.findByPk(decoded.userId).then((user) => {
      if (!user) {
        return res.status(401).json({ message: 'Invalid token or user not found.' });
      }

      // Attach the user to the request for future use
      req.user = user;
      next();
    });
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Invalid token.' });
  }
};

exports.checkUserRole = (role) => {
  return (req, res, next) => {
    if (req.user && req.user.role === role) {
      next();
    } else {
      res.status(403).json({ message: 'Access denied. You do not have the required role.' });
    }
  };
};
