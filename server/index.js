const express = require('express');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const { config } = require('dotenv').config();

const userAuthRouter = require('./api/userAuth');

const app = express();

// creating 24 hours from milliseconds
const oneDay = 1000 * 60 * 60 * 24;

// //session middleware
app.use(sessions({
    secret: "test-string",
    saveUninitialized:true,
    cookie: { maxAge: oneDay },
    resave: false
}));

// parse request data
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

// parse cookie data
app.use(cookieParser());

// API Routes
app.use(userAuthRouter);

// serving public build
app.use(express.static(`${__dirname}/../www/build`));

// Choose the port and start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});