//api/new-user.js
module.exports = function(db) {
  return function(req, res) {
    const superagent = require('superagent')
    superagent
      .post(`http://localhost:${process.env.USERS_PORT || 3000}/users`)
      .send({
        email: req.body.email,
        password: req.body.password
      })
      .end((err, agentResponse) => {
        if (err) {
          return res.status(500).json(err)
        } else {
          delete agentResponse.body.password; // remove the password from the response
          return res.json(agentResponse.body);
        }
      })
  }
}
