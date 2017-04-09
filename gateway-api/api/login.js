/**
 * Created by Deakyu on 4/9/2017.
 */
module.exports = function(db) {
    return function(req, res) {
        let superagent = require('superagent');

        superagent
            .get('http://localhost:3000/users?email=' + req.body.email)
            .set('Accept', 'application/json')
            .end((err, agentResponse) => {
                if(err) {
                    return res.status(403).json({
                        code: 'Forbidden',
                        message: 'No user with that email'
                    });
                }

                if(agentResponse.body.password == req.body.password) {
                    return res.json({_id: 'someId'});
                } else {
                    return res.status(403).json({
                        code: 'Forbidden',
                        message: 'Wrong Password'
                    });
                }
            });
    };
};