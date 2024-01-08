const jwt = require('jsonwebtoken');
const config = require('../config');

const generateToken = (user) => {
  const { username, email } = user;
  return jwt.sign({ username, email }, config.jwtSecret, {
    expiresIn: '2h' // INPUT_REQUIRED {Change token expiration time as needed}
  });
};

module.exports = generateToken;
