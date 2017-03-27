// db-get-spot.js
module.exports = function(db) {
  return function(req, res) {
    var spots = db.collections('spots');
    spots.find({_id:req.params.id}).toArray((err, result) => {
      if(err) throw err;

      res.json(result[0]);
    });
  };
};
