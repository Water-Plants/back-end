const jwt = require('jsonwebtoken');
const secrets = require('../config/secret');

module.exports = (req, res, next) => {
  const token = req.header('authorization');
  if (!token) {
    res.status(400).json({ message: 'You must be logged in to view this page!' });
  } else {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        res.status(401).json({ message: 'Token does not exist', err });
      } else {
        console.log('decoded token: ', decodedToken)
        req.decodedToken = decodedToken
        next();
      }
    });
  };
};
