/**
 * Created by Deakyu on 4/9/2017.
 */
module.exports = function(db) {
    return function(req, res) {
        let superagent = require('superagent');

        superagent
            .get('http://localhost:3000/users?email=' + req.body.email)
            .set('Accept', 'application/json')
            .send({password: req.body.password})
            .end((err, agentResponse) => {
                if(err) {
                    return res.status(500).json(err);
                } else {
                    if(agentResponse.code == 'Forbidden') {
                        return res.status(403).json({
                           code: agentResponse.code,
                            message: agentResponse.message
                        });
                    } else {
                        return res.status(200).json({
                            _id: agentResponse._id
                        });
                    }
                }
            });
    };
};