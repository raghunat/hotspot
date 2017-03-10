const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

// Allow Cross origin requests
app.use(cors());

// Allow JSON request bodies
app.use(bodyParser.json());

// Load in routes:
app.get('/alive', require('./api/alive.js')());
app.post('/spots', require('./api/post-spots.js')());

// only bootstrapped, not run (for testing)
module.exports = app;
