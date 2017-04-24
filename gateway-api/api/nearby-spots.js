//nearby-spots.js

module.exports = function(db) {
  return function(req, res) {
    var superagent = require('superagent');

    superagent
      .get(`http://localhost:${process.env.SPOTS_PORT || 3000}/spots`)
      .end((err, response) => {
        if (err || !response.ok) {
          res.status(500).json({
            code: 'DbError',
            err: err || response.text
          });
        } else {
          var spots = response.body;
          var spotsToReturn = [];
          for (var i = 0; i < spots.length; i++) {
            if (!spots[i].location || !spots[i].location[0] || !spots[i].location[1]) {
              continue; // skip malformed spots
            }
            // res.body.location is the array the latitude and longitude from the user
            // spots[i].location is the array from the spots object

            //if latitude is greater than bottom left location
            if (req.body.location[0] > spots[i].location[0][0] &&
              //if latitude is less than top left location
              req.body.location[0] < spots[i].location[1][0] &&
              //if longitude is grater than bottom left loaction
              req.body.location[1] > spots[i].location[0][0] &&
              //if longitude is less than bottom right location
              req.body.location[1] < spots[i].location[3][0]) {
              spotsToReturn.push(spots[i]);
            }
          }
          res.json(spotsToReturn);
        }
      });

  }
};
