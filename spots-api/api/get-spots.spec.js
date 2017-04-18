//get-spots.spec.js
var app = require('../app.js');

var supertest = require('supertest');
var should = require('should');

describe('/spots', () => {
  it('should return a list of spot objects on get/', (done) => {
    supertest(app)
    .get('/spots')
    .expect(200)
    .end((err, res) => {
      res.body.should.be.an.Array;
      done();
    });
  });
});
