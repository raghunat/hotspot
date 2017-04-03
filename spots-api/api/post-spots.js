//post-spots.js

module.exports = function(db) {
  return function(req, res) {
    var spots = db.collection('spots');
    spots.insert({req.body}, function(err, result) {
      if(err) throw err;
      res.json(result);
    });
  }
};
