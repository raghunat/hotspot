//app.js
//Bootstrapping the express application
//load all routes
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

//Allow Corss origin request
app.use(cors());

//Allow JSON request bodies
app.use(bodyParser.json());

//Load in routes
app.post('/login',require('./login.js')());

//only bodystrap, not run for testing
module.exports = app;
