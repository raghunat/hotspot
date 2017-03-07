//app/get-user.js

// GET /users/:id RequestObject:
// none, just simple get
// ResponseObject
module.exports = function() {
  return function(req, res) {
    res.json({
      username: 'Username1234',
      password: 'someawesomepassword',
      email: 'email@email.com'
    });
  }
}
