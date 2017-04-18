//api/new-user.js
module,exports = function(db) {
  return function(req,res){
    const superagent = require('superagent')
    superagent
    .post('http://localhost:3000/users')
    .send({
      email: '123456@test.com',
      password:'123456'
    })
    .end((err,agentResponse)=>{
      if(err){
        return res.status(500).json(err)
      }else{
        delete agentResponse.body.password; // remove the password from the response
        return res.json(agentResponse.body);
      }
    })
  }
}
