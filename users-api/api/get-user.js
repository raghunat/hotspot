//app/get-user.js

var people = db.collection('users');

// GET /users/:id RequestObject:
// none, just simple get
// ResponseObject
module.exports = function(db) {
  return function(req, res) {
      people.find({_id: req.params.id}).toArray(function(err, result) {
        if(err) {
          throw err;
        }
        res.json(result[0]);
      });
  }
}
