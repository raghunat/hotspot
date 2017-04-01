// api/alive.js

<<<<<<< HEAD
module.exports = function() {
=======
module.exports = function(db) {
>>>>>>> 51ec83ef19c011511a7f7bc91bcf408b73343675
  // Returns an express req/res callback function
  return function(req, res) {
    db.listCollections().toArray((err, collections) => {
      if (err) {
        res.status(500).json({
          code: 'DbError',
          err: err
        });
      } else {
        res.json({
          message: 'Johnny Five is alive!',
          collections: collections
        });
      }
    });
  }
}
