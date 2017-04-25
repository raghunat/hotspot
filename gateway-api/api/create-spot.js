// api/alive.js
const superagent = require('superagent');
module.exports = function(db) {
  // Returns an express req/res callback function
  return function(req, res) {
    superagent
      .post(`http://localhost:${process.env.SPOTS_PORT || 3000}/spots`)
      .send(req.body)
      .end((err, agentResponse) => {
        if (err) {
          return res.status(500).json(err)
        } else {
          return res.json(agentResponse.body);
        }
      })
  }
}
