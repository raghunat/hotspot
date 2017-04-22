var app = require('../app.js');
var supertest = require('supertest');
const should = require('should');

describe('Testing if a spot is nearby', () => {
  it('should check to see if any spots are nearby ', (done) => {
    supertest(app)
      .post('/nearby-spots')
      .send({
        location: [1, 2]
      })
      .expect(200)
      .end((err, res) => {
        res.body.should.be.an.Array;
        done();
      });
  });

});
