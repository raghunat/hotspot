//post-spots.js

module.exports = function(db) {
  return function(req, res) {
    var spots = db.collection('spots');
    spots.insert(req.body, function(err, result) {
      if(err) {
        res.status(500).json{(
          code: "DbError",
          err: err
        )};
      } else {
        console.log("Created Spot: ", result);
        res.json(result);
      }
    });
  }
};
