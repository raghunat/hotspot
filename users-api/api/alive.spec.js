const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/alive', () => {
  it('should return an alive message', done => {
    supertest(app)
    .get('alive')
    .end((err, res) => {
      res.text.should.equal('Johnny Five is alive!');
      done();
    });
  });
});
