/**
 * Created by Deakyu on 4/9/2017.
 */
module.exports = function(db) {
  return function(req, res) {
    let superagent = require('superagent');

    superagent
      .get(`http://localhost:${process.env.USERS_PORT || 3000}/users?email=` + req.body.email)
      .send({password: req.body.password})
      .end((err, agentResponse) => {
        if (err) {
          return res.status(500).json(err);
        } else {
          if (agentResponse.code == 'Forbidden') {
            return res.status(403).json({
              code: agentResponse.code,
              message: agentResponse.message
            });
          } else {
            let user = agentResponse.body[0];
            if (!user) return res.status(404).json({code: 'NotFound'});
            if (user.password !== req.body.password) return res.status(401).json({code: 'WrongPassword'});

            // All good!
            delete user.password;
            res.json(user);
          }
        }
      });
  };
};
