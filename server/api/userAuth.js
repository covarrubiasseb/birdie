const express = require('express');

let router = express.Router();

const tempName = "Name";
const tempPass = "1234";

router.post("/api/auth/login", (req, res, next) => {

  if (req.session && req.session.isLoggedIn) {
    // if logged in

    // redirect to main, where the client will make a different api call to retrieve social media data
    // and will also use req.session.isLoggedIn to validate (all endpoints will)
    res.send(true);
  } else {

    if (req.body.data && (req.body.data.username === tempName) && (req.body.data.password === tempPass) ) {

      req.session.isLoggedIn = true;

      res.send(true);

    } else {

      // not logged in
      // return not logged in to client
      res.send(false);
    }
  } 


  return next();
});


// Todo: Handle new account creation
router.post("/api/auth/register", (req, res, next) => {

  res.send(null);

  return next();

});

module.exports = router;