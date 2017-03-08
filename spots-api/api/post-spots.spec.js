//post-spots.spec.js
var app = require('../spots.js');

var supertest = require('supertest');
var should = require('should');

describe('/spots', () => {
  it('should return a list of spot objects on get/', (done) => {
    supertest(app)
    .get('/spots')
    .expect(200)
    .end((err, res) => {
      res.body.should.equal({
        id: '12345',
        location: [12.34][34.56],
        name: 'Starbucks',
        checkIns: ['user1', 'user2', 'user3']
      });
      done();
    });
  });
});
