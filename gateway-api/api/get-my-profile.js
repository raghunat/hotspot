module.exports = function(db) {
  return function(req, res) {
    let superagent = require('superagent');
    superagent
      .get(`http://localhost:${process.env.USERS_PORT || 3000}/users/` + req.params.id)
      .end((err, agentResponse) => {
        if (err) {
          return res.status(500).json(err);
        } else {
          delete agentResponse.body.password;
          res.json(agentResponse.body);
        }
      });
  };
};
