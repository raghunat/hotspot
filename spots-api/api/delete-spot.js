//delete-spot.js



module.exports = function (db) {
  return function (req, res) {
    var spots = db.collection('spots');
  spots.remove(  spots.find ({_id: req.params.id}), {$set: req.body}, false, function(err, result) {

      if(err) throw err;

  res.json('Spot deleted');
  }
}
