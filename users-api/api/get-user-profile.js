module.exports = function(db) {
  return function(req, res) {
      let user = db.collections('users');
      user.find({_id: req.params.id}, function(err, result) {
          if(err) {
            return res.json({
              statusOnUser: 'fail'
              dbResult: 'User not Found'
            });
          } else {
            result.statusOnUser = 'success'
            result.password = null;
            return res.json(result);
          }
      });
  };
};
