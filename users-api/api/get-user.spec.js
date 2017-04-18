const app = require('../app.js');
const should = require('should');
const supertest = require('supertest');

describe('/users/:id', () => {
    it('should return a users individual data by their id', done => {
      supertest(app)
      .get('/users/:id')
      .end((err, res) => {
        res.body.should.be.an.Object
        done();
      });
    });
});
