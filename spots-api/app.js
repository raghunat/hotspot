const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');

// Allow Cross origin requests
app.use(cors());

// Allow JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Load in routes:
app.get('/alive', require('./api/alive.js')());
app.get('/spots', require('./api/get-spots.js')());
app.post('/spots', require('./api/post-spots.js')());
app.put('/spots/:id', require('./api/put-spot.js')());

// only bootstrapped, not run (for testing)
module.exports = app;
