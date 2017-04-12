//nearby-spots.js

module.exports = function(db) {
  return function(req, res) {
    var superagent = require('superagent');

    superagent
    .get('http://localhost:3000/spots')
    if(err) {
      res.status(500).json({
        code: 'DbError',
        err: err
      });
    } else {
        res.json(spots);
        var spotsToReturn = [];
        for(var i = 0; i < spots.length; i++) {
          if (res.body.location[0] > spots[i].location[0][0] &&
            res.body.location[0] < spots[i].location[1][0] &&
            res.body.location[1] > spots[i].location[0][0] &&
            res.body.location[1] < spots[i].location[3][0])
            {
              spotsToReturn.push(spots[i]);
            } else {
              res.send('No nearby spots.');
            }
        }
        res.json(spotsToReturn);
    }
  }
};
