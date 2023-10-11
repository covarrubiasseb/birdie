const express = require('express');

let router = express.Router();

router.post('/api/auth/login', (req, res, next) => {
  console.log(req.body);

  // Todo: return valid token on successful token/login info

  // if a valid token was sent, return validated true
  let validated = false;

  if (validated) {
  // if logged in
    res.send(true);
  } else {

    // Todo: if the token is invalid, check the login and password attempt

    // not logged in
      // return not logged in to client
    res.send(false);
  } 


  return next();
});

module.exports = router;