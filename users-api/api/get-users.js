//get-users.js

module.exports = function(db) {
    
    return function(req, res) {
        db.collection('users').find({}, (err, users) => {
            if(err) return res.status(500).json({code: 'DbError', err: err});
            else return res.json(users);
        });
    }
}