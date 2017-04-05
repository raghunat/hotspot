/**
 * Created by Deakyu on 3/23/2017.
 */
// post-user.js
module.exports = function(db) {
    return function(req, res) {
        let user = db.collection('users');

        user.insert(req.body, function(err, result) {
            if(err) {
                res.status(500).json({
                   code: "DbError",
                    err: err
                });
            } else {
                console.log("Created User:", result);
                res.json(result);
            }
        });
    };
};