
module.exports = function(db) {
  return function(req, res) {
    var users = db.collection('users');
     users.update({_id: req.params.id}, {$set: req.body}, function(err, result) {
       if(err) throw err;

     res.json(result);
   });
  }
}
