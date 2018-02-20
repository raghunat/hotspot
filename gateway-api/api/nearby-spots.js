//nearby-spots.js

module.exports = function(db) {

  // Helper functions
  function getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
      ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI / 180)
  }

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
            // if (!spots[i].location || !spots[i].location[0] || !spots[i].location[1]) {
            //   continue; // skip malformed spots
            // }
            // // res.body.location is the array the latitude and longitude from the user
            // // spots[i].location is the array from the spots object
            //
            // //if latitude is greater than bottom left location
            // if (req.body.location[0] > spots[i].location[0][0] &&
            //   //if latitude is less than top left location
            //   req.body.location[0] < spots[i].location[1][0] &&
            //   //if longitude is grater than bottom left loaction
            //   req.body.location[1] > spots[i].location[0][0] &&
            //   //if longitude is less than bottom right location
            //   req.body.location[1] < spots[i].location[3][0]) {
            //   spotsToReturn.push(spots[i]);
            // }

            //Moved to single lat/long pair
            if (getDistanceFromLatLonInKm(
                req.body.location[0],
                req.body.location[1],
                spots[i].location[0],
                spots[i].location[1]
              ) <= req.body.radius || 30) {
              spotsToReturn.push(spots[i]);
            }
          }
          res.json(spotsToReturn);
        }
      });

  }
};
