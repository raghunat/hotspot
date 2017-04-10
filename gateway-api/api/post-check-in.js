// gateway-api/api/check-in.js
module.exports = function(db) {
  return function(req, res) {
    var superagent = require('superagent');

    superagent
      .put('http://localhost:3000/spots/' + req.body.id)
      .set('Accept', 'application/json')
      .send({email: req.body.email})
      .end((err, agentResponse) => {
        if (err) {
          return res.status(500).json(err);
        }
        if (agentResponse.body.email === req.body.email) {
          return res.json({SpotObject});
        } else {
          return res.status(403).send('Invalid Email');
        }
      });
  }
}
