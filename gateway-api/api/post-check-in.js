// gateway-api/api/check-in.js
module.exports = function(db) {
  return function(req, res) {
    var superagent = require('superagent');

    superagent
      .put(`http://localhost:${process.env.SPOTS_PORT || 3000}/spots/` + req.params.id)
      .set('Accept', 'application/json')
      .send({$push: {checkIns: req.body.email}})
      .end((err, agentResponse) => {
        if (err) {
          return res.status(500).json(err);
        }
        if (agentResponse.body.checkIns.indexOf(req.body.email) > -1) {
          return res.json(agentResponse.body);
        } else {
          return res.status(403).send('Invalid Email');
        }
      });
  }
}
