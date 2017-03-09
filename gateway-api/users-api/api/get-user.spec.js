const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/get-user', () => {
    it('should return a users individual data', done => {
      supertest(app)
      .get('/users/123')
      .end((err, res) => {
        res.body.username.should.equal('Username1234');
        res.body.password.should.equal('someawesomepassword');
        res.body.email.should.equal('email@email.com');
        done();
      });
    });
});
