// server.js
const app = require('./app.js');

// run the server
app.listen(process.env.GATEWAY_PORT || 3000, () => {
  console.log('users-api listening on 3000');
});
