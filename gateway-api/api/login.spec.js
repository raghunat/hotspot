const app = require('./app.js');
const should = require('should');
const supertest = require('supertest');

describe('/login', () => {
  it('login', done => {
    supertest(app)
      .post('/login')
      .end((err, res) => {
        res.body.email.should.equal('string@.com')
        done();
      });
  });
});
