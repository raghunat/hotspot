// post-new-user.js

module.exports = function(db) {
  return function(req, res) {
    var superagent = require('superagent');

    superagent
    .post('http://localhost:3000/new-user/')
    .send({
      email: 'ManBearPig@gmail.com',
      password: 'manbear3'
    })
    .set('Accept', 'application/json')
    .end((err, agentRes)=> {
      if(err){
        return(res.status(500).json(err))
      }
      else {
        return res.json({SpotObject})
      }
    })
  }
}
