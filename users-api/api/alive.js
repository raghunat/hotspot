/**
 * Created by Deakyu on 3/2/2017.
 */

// api/alive.js

module.exports = function () {

    // returns an express req/res callback function
    return function(req, res) {
        res.send("Johnny Five is alive");
    }
}