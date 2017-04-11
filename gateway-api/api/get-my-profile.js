module.exports = function(db) {
  return function(req, res) {
      let superagent = require('superagent');

      superagent
            .get('http://localhost:3000/users/' + req.body.id)
            .set('Accept', 'application/json')
            .end((err, agentResponse) => {
                if(err) {
                  return res.status(500).json(err);
                } else {
                  if(agentResponse.statusOnUser == 'fail') {
                    return res.send(agentResponse.dbResult);
                  } else if(agentResponse.statusOnUser == 'success') {
                    return res.json(agentResponse.result);
                  } else {
                    return res.send('Some error');
                  }
                }
            });
  };
};
