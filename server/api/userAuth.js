const express = require('express');

let router = express.Router();

router.post('/api/auth/login', (req, res) => {
  console.log(req.body);
  res.end();
});

module.exports = router;