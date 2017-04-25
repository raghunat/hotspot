//get-users.js

module.exports = function(db) {
  const users = db.collection('users');
  return function(req, res) {
    users.find(req.query || {}).toArray((err, users) => {
      if (err) {
        res.status(500).json({
          code: 'DbError',
          err: err
        });
      } else {
        res.json(users);
      }
    });
  }
}