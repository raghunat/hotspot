const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/get-user', () => {
    it('should return a users individual data', done => {
      supertest(app)
      .get('/get-user')
      .end((err, res) => {
        res.text.should.equal(
          username: 'Username1234'
          password: 'someawesomepassword'
          email: 'email@email.com');
        done();
      });
    });
});
