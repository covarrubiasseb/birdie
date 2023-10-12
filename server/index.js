const express = require('express');
const cors = require('cors');
const sessions = require('express-session');
const { config } = require('dotenv').config();

const userAuthRouter = require('./api/userAuth');

const app = express();

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

app.use(sessions({
  secret: "thisismysecrctekeyf435346",
  saveUninitialized:true,
  cookie: { maxAge: oneDay },
  resave: false
}));

app.use(cors());

// parse request data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Routes
app.use(userAuthRouter);

// serving public build
app.use(express.static(`${__dirname}/../www/build`));

// handle page refresh GET requests
app.get("/*", (req, res) => {
  res.sendFile('index.html', { root: `${__dirname}/../www/build`});
});

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});