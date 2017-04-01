
//app.js
//Bootstrapping the express application
//load all routes

// app.js
// Bootstrapping the express application
<<<<<<< HEAD
// Loads all routes


=======
>>>>>>> 998dc4cd00c296f707e9d615857d9ece4318cb06
const app = require('express')();
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const path = require('path');

// Load environment secret variables
require('dotenv').config({
  path: path.join(__dirname, '../.env')
});

// Connection URL
const mongoURL = `mongodb://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@ds119210.mlab.com:19210/hotspotdb`;


//Allow Corss origin request
app.use(cors());

//Allow JSON request bodies
app.use(bodyParser.json());

//Load in routes
app.get('/alive',require('./api/alive.js')());

//only bodystrap, not run for testing

// Allow Cross origin requests
app.use(cors());

// Allow JSON request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

// Use connect method to connect to the server
MongoClient.connect(mongoURL, function(err, db) {
  if (err) {
    throw err;
  }
  console.log("Connected successfully to mongo");
  // Load in routes:
  app.get('/alive', require('./api/alive.js')(db));
  app.get('/users', require('./api/get-users.js')(db));
  app.put('/users/:id', require('./api/put-user.js')(db));
});

// only bootstrapped, not run (for testing)

module.exports = app;
