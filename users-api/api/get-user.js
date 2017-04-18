//app/get-user.js

// GET /users/:id RequestObject:
// none, just simple get
// ResponseObject
module.exports = function(db) {
  var people = db.collection('users');
  return function(req, res) {
      people.findOne({_id: req.params.id}, function(err, result) {
        if(err) {
          throw err;
        }
        res.json(result[0]);
      });
  }
}
