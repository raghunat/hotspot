module.exports = function(db) {
  return function(req, res) {
    var spots = db.collections('spots');
    spots.findOne({_id:req.params.id}).toArray((err, result) => {
      if(err) {
        return res.status(500).json({
          code: 'DbError',
          err: err
        });
      };

      res.json(result[0]);
    });
  };
};
