const express = require('express');
const dotenv = require('dotenv');

const app = express();

app.use(express.static(`${__dirname}/../www/build`));

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});