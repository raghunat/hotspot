module.exports = function(db) {
  return function(req, res) {
      let superagent = require('superagent');

      superagent
            .get('http://localhost:3000/users/' + req.body.id)
            .end((err, agentResponse) => {
                if(err) {
                  return res.status(500).json(err);
                } else {
                  delete agentResponse.body.password;
                  res.json(agentResponse.body);
                }
            });
  };
};
