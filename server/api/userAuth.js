const express = require('express');

let router = express.Router();

router.get('/api/auth/login', (req, res, next) => {
  console.log(req.session);
  const session = req.session;

  if (session.validated) {
  // if logged in
    res.send(true);
  } else {
    // not logged in
      // return not logged in to client
    res.send(false);
  } 

  next();
});

module.exports = router;