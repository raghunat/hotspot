/**
 * Created by Deakyu on 3/23/2017.
 */
// post-user.js
module.exports = function(db) {
    return function(req, res) {
        var user = db.collection('users');

        user.insert(req.body).toArray(function(err, result) {
            if(err) throw err;

            console.log("Created User:", result);
            res.json(result);
        });
    };
}