//delete-spot.js

module.exports = function (db) {
  return function (req, res) {
    var spots = db.collection('spots');
    spots.remove({_id: req.params.id}, function(err, result) {
      if(err) throw err;
      res.send('Spot deleted');
    });
  }
}
