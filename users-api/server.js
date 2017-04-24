// server.js
const app = require('./app.js');

// run the server
app.listen(process.env.USERS_PORT || 3000, () => {
  console.log('users-api listening on 3000');
});

