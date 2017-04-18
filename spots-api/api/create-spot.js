// create-spot.js

module.exports = function(db) {
  return function(req, res) {
    var superagent = require('superagent');

    superagent
    .post('http://localhost:3000/new-spot/')
    .send({
    long: '123.456',
      lat: '456.123'
      radius: '30'
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
