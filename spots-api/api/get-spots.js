//get-spots.js

module.exports = function(db) {

  // Returns an express req/res callback function
  return function(req, res) {
    db.collection('spots').find({} , (err, spots) => {
      if(err) return res.status(500).json({code: 'DbError', err: err});
      else return res.json(spots);
    });
  }
}
