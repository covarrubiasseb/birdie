const express = require('express');
const { config } = require('dotenv').config();

const userAuthRouter = require('./api/userAuth');

const app = express();

app.use(express.json());

app.use(express.static(`${__dirname}/../www/build`));

// API Routes
app.use(userAuthRouter);

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});