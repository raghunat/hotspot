// app.js
// Bootstrapping the express application
// Loads all routes

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

// Allow Cross origin request
app.use(cors());

// Allow JSON request bodies
app.use(bodyParser.json());

// Load in routes:
app.get('/alive', require('./api/alive.js')());

//Only bootstrapped, not run (for testing)
module.exports = app;
