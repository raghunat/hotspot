// spots.js
// Bootstrapping the express application
// Loads all routes

const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

// Allow Cross origin requests
app.use(cors());

// Allow JSON request bodies
app.use(bodyParser.json());

global.spots = [
  {
    id: '12345',
    location: [12.34][34.56],
    name: 'Starbucks',
    checkIns: ['user1', 'user2', 'user3']
  }
];

// Load in routes:
app.get('/spots', require('./api/get-spots.js')());


// only bootstrapped, not run (for testing)
module.exports = app;
