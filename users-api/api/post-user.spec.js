/**
 * Created by Deakyu on 3/23/2017.
 */
// post-user.spec.js
const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

var userCreated = {
    email: "lee5250@fredonia.edu",
    password: "123456"
};

describe('/users', function(){
   it('should create a user in response to the req.body', function(done) {
       supertest(app)
           .post('/users')
           .send(userCreated)
           .end(function(err, res) {
               if(err) throw err;

               res.body.ops[0].email.should.equal(userCreated.email);
               res.body.ops[0].password.should.equal(userCreated.password);
               done();
           });
   });
});