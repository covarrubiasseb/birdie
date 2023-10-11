const express = require('express');

let router = express.Router();

router.get('/api/auth/login', (req, res, next) => {
  console.log(req.body);
  const session = req.body;

  if (req.body) {
  // if logged in
    res.send(true);
  } else {
    // not logged in
      // return not logged in to client
    res.send(false);
  } 

  return next();
});

module.exports = router;