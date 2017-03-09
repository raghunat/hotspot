// app.js
// Bootstrapping the express application
// Loads all routes

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

// Allow cross origin requests
app.use(cors());

// Allow JSON request bodies
app.use(bodyParser.json());

// Load in all of the routes:
app.get('/alive', require('./api/alive.js')());
app.get('/users/:id', require('./api/get-user.js')());

// only bootstrapped, not run (for testing)
module.exports = app;
