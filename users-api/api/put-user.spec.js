
const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/users/:id', (db) => {
  it('should update a users information', (done) => {
    supertest(app)
    .put('/users/:id')
    .send({
      _id: 123,
      _name: 'Vincent',
      _favoriteSpot: 'Italy'
    })
    .end((err, res) => {
      res.body.should.be.an.Object;
      done();
    });
  });
});
