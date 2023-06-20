const express = require('express');
const app = express();
const dotenv = require('dotenv');

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});