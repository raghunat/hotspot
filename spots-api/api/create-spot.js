// create-spot.js

module.exports = function(db) {
  return function(req, res) {
    var superagent = require('superagent');

    superagent
      .post('http://localhost:3000/spots/')
      .send(req.body)
      .end((err, agentRes)=> {
         if(err){
            return res.status(500).json(err);
          }
         else {
            return res.json(agentRes.body);
          }
      });
  }
}
