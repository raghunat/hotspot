//app/get-user.js

// GET /users/:id RequestObject:
// none, just simple get
// ResponseObject
module.exports = function() {
  return function(req, res) {
    res.json({
      people.find({_id: req.params.id}).toArray(function(err, result) {
        if(err) {
          throw err;
        }
        res.json(result[0]);
      });
    });
  }
}
