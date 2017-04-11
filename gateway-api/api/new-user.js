//api/new-user.js
module,exports = function(db) {
  return function(req,res){
    const superagent = require('superagent')
    superagent
    .post('http://localhost:3000/new-user')
    .send({
      email: '123456@test.com',
      password:'123456'
  })
    .set('Accept', 'application/json')
    .end((err,agentResponse)=>{
      if(err){
        return res.status(500).json(err)
      }else{
        return res.json({SpotObject})
      }
    })
  }
}
