var api = require('express')();
var superagent = require('superagent');
var bodyParser = require('body-parser');

module.exports = function(db) {
api.get('/my-profile/:id', (req, res)=> {
  superagent.get('http://localhost:3000/users/:id' + req.params.id)
  .set('Accept', 'application/json')
  .end((err, agentResponse) => {
    if(err)
    {
      return res.status(500).json(err);
    }
    else {
      return json({UserObjectWithoutPasswordField});
    }
  });
});
}
