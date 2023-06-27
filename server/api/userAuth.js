const express = require('express');

let router = express.Router();

router.post('/api/login', (req, res) => {
  console.log(req.body);
  res.end();
});

module.exports = router;