const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/spots/:id', (req, res) => {
  it('should return a json object', done => {
    supertest(app)
      .get('/spots/1')
      .end(err, res) => {
        res.body.id.should.equal('1');
        done();
      }
  })
});
