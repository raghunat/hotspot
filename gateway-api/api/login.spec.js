const app = require('./app.js');
const should = require('should');
const supertest = require('supertest');

describe('/login', () => {
  it('login', done => {
    supertest(app)
      .post('/login')
      .send({
      "email":'string@.com',
      "password":'string'
    })
      .end((err, res) => {
        res.body.email.should.equal('string@.com')
        res.body.password.should.equal('string')
        done();
      });
  });
});
