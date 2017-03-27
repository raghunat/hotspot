// put-spot.js
module.exports = function(db) {
  return function(req, res) {
    var spots = db.collection('spots');
    spots.update({_id: req.params.id}, {$set: req.body}, function(err, result) {
      if(err) throw err;

      res.json(result);
    });
  }
}
